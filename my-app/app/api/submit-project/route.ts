import { NextResponse } from "next/server";
import { headers } from "next/headers";

interface SubmissionPayload {
  title: string;
  description: string;
  students: string;
  supervisor: string;
  tags: string[];
  year: string;
  turnstileToken: string;
  projectType?: "main" | "mini";
}

// In-memory rate limit: IP -> last submission timestamp
const rateLimitMap = new Map<string, number>();
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute between submissions

function getClientIp(): string {
  const hdrs = headers();
  return (
    hdrs.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    hdrs.get("x-real-ip") ||
    "unknown"
  );
}

async function verifyTurnstile(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // skip verification if not configured

  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    }
  );
  const data = await res.json();
  return data.success === true;
}

function validateSubmission(data: any): { valid: boolean; error?: string } {
  if (!data.title || data.title.trim().length < 2)
    return { valid: false, error: "Project title is required (min 2 chars)" };
  if (!data.description || data.description.trim().length < 10)
    return { valid: false, error: "Description is required (min 10 chars)" };
  if (!data.students || data.students.trim().length < 2)
    return { valid: false, error: "Student names are required" };
  if (!data.supervisor || data.supervisor.trim().length < 2)
    return { valid: false, error: "Supervisor name is required" };
  if (!data.tags || !Array.isArray(data.tags) || data.tags.length === 0)
    return { valid: false, error: "At least one technology tag is required" };
  if (!data.year || data.year.trim().length < 4)
    return { valid: false, error: "Academic year is required" };
  return { valid: true };
}

function sanitize(str: string): string {
  return str
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/[`$]/g, "")
    .trim();
}

function buildProjectEntry(data: SubmissionPayload, nextId: number): string {
  const title = sanitize(data.title);
  const description = sanitize(data.description);
  const students = sanitize(data.students);
  const supervisor = sanitize(data.supervisor);
  const tags = data.tags.map((t) => `"${sanitize(t)}"`).join(", ");
  const typeLine =
    data.projectType === "mini" ? `\n      projectType: "mini",` : "";

  return `    {
      id: ${nextId},
      title: "${title}",
      description:
        "${description}",
      students: "${students}",
      supervisor: "${supervisor}",
      tags: [${tags}],${typeLine}
    }`;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validation = validateSubmission(body);

    if (!validation.valid) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    // Rate limiting
    const ip = getClientIp();
    const lastSubmission = rateLimitMap.get(ip);
    if (lastSubmission && Date.now() - lastSubmission < RATE_LIMIT_WINDOW_MS) {
      const waitSec = Math.ceil(
        (RATE_LIMIT_WINDOW_MS - (Date.now() - lastSubmission)) / 1000
      );
      return NextResponse.json(
        { error: `Please wait ${waitSec}s before submitting again.` },
        { status: 429 }
      );
    }

    // Turnstile CAPTCHA verification
    const turnstileToken = body.turnstileToken;
    if (!turnstileToken) {
      return NextResponse.json(
        { error: "Please complete the CAPTCHA verification." },
        { status: 400 }
      );
    }
    const turnstileOk = await verifyTurnstile(turnstileToken);
    if (!turnstileOk) {
      return NextResponse.json(
        { error: "CAPTCHA verification failed. Please try again." },
        { status: 403 }
      );
    }

    const data: SubmissionPayload = {
      title: body.title.trim(),
      description: body.description.trim(),
      students: body.students.trim(),
      supervisor: body.supervisor.trim(),
      tags: body.tags.map((t: string) => t.trim()).filter(Boolean),
      year: body.year.trim(),
      turnstileToken: body.turnstileToken,
      ...(body.projectType === "mini" ? { projectType: "mini" as const } : {}),
    };

    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    if (!GITHUB_TOKEN) {
      return NextResponse.json(
        { error: "GitHub integration is not configured. Please contact the admin." },
        { status: 503 }
      );
    }

    const REPO_OWNER = "KiranBabu007";
    const REPO_NAME = "Project-Shelf-CSE-SJCET";
    const FILE_PATH = "my-app/app/project-shelf/projects.js";
    const BASE_BRANCH = "main";

    const headers = {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
      "X-GitHub-Api-Version": "2022-11-28",
    };

    const apiBase = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}`;

    // 1. Get the current file content from the base branch
    const fileRes = await fetch(
      `${apiBase}/contents/${FILE_PATH}?ref=${BASE_BRANCH}`,
      { headers }
    );

    if (!fileRes.ok) {
      const errText = await fileRes.text();
      console.error("Failed to fetch file:", errText);
      return NextResponse.json(
        { error: "Failed to read project data from repository" },
        { status: 500 }
      );
    }

    const fileData = await fileRes.json();
    const currentContent = Buffer.from(fileData.content, "base64").toString(
      "utf-8"
    );

    // 2. Figure out the next ID for the target year
    const yearKey = data.year;
    const yearKeyPattern = yearKey.includes("-")
      ? `"${yearKey}"`
      : yearKey;

    let maxId = 0;
    const idRegex = /id:\s*(\d+)/g;
    let idMatch: RegExpExecArray | null;
    while ((idMatch = idRegex.exec(currentContent)) !== null) {
      const num = parseInt(idMatch[1], 10);
      if (num > maxId) maxId = num;
    }
    const nextId = maxId + 1;

    const newEntry = buildProjectEntry(data, nextId);

    // 3. Insert the new project into the correct year array
    let updatedContent: string;

    // Find the closing bracket of the target year's array
    const yearRegex = new RegExp(
      `(${yearKeyPattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*:\\s*\\[)([\\s\\S]*?)(\\])`
    );

    const yearMatch = currentContent.match(yearRegex);

    if (!yearMatch) {
      return NextResponse.json(
        { error: `Year "${yearKey}" not found in project data` },
        { status: 400 }
      );
    }

    const arrayContent = yearMatch[2].trim();
    if (arrayContent.length === 0) {
      // Empty array -- insert as first entry
      updatedContent = currentContent.replace(
        yearRegex,
        `$1\n${newEntry},\n  $3`
      );
    } else {
      // Has entries -- append after the last one
      const lastBraceIndex = currentContent.lastIndexOf(
        "},",
        currentContent.indexOf(yearMatch[3], currentContent.indexOf(yearMatch[0]))
      );

      if (lastBraceIndex === -1) {
        // Fallback: append before closing bracket
        updatedContent = currentContent.replace(
          yearRegex,
          `$1$2,\n${newEntry},\n  $3`
        );
      } else {
        // Insert after the last entry's closing brace+comma
        const insertPoint = currentContent.indexOf(
          "\n",
          lastBraceIndex
        );
        updatedContent =
          currentContent.slice(0, insertPoint + 1) +
          newEntry +
          ",\n" +
          currentContent.slice(insertPoint + 1);
      }
    }

    // 4. Create a new branch
    const branchName = `project-submission/${data.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .slice(0, 40)}-${Date.now()}`;

    // Get the SHA of the base branch
    const refRes = await fetch(
      `${apiBase}/git/ref/heads/${BASE_BRANCH}`,
      { headers }
    );

    if (!refRes.ok) {
      return NextResponse.json(
        { error: "Failed to access repository" },
        { status: 500 }
      );
    }

    const refData = await refRes.json();
    const baseSha = refData.object.sha;

    // Create the branch
    const createBranchRes = await fetch(`${apiBase}/git/refs`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        ref: `refs/heads/${branchName}`,
        sha: baseSha,
      }),
    });

    if (!createBranchRes.ok) {
      const errText = await createBranchRes.text();
      console.error("Failed to create branch:", errText);
      return NextResponse.json(
        { error: "Failed to create submission branch" },
        { status: 500 }
      );
    }

    // 5. Update the file on the new branch
    const updateFileRes = await fetch(
      `${apiBase}/contents/${FILE_PATH}`,
      {
        method: "PUT",
        headers,
        body: JSON.stringify({
          message: `Add project: ${data.title} (${data.year})\n\nSubmitted by: ${data.students}\nSupervisor: ${data.supervisor}\nTags: ${data.tags.join(", ")}`,
          content: Buffer.from(updatedContent).toString("base64"),
          sha: fileData.sha,
          branch: branchName,
        }),
      }
    );

    if (!updateFileRes.ok) {
      const errText = await updateFileRes.text();
      console.error("Failed to update file:", errText);
      return NextResponse.json(
        { error: "Failed to commit project data" },
        { status: 500 }
      );
    }

    // 6. Create a pull request
    const prBody = `## New Project Submission

**Title:** ${data.title}
**Year:** ${data.year}
**Students:** ${data.students}
**Supervisor:** ${data.supervisor}
**Tags:** ${data.tags.join(", ")}

### Description
${data.description}

---
*This PR was auto-generated from the Project Shelf submission form.*`;

    const createPrRes = await fetch(`${apiBase}/pulls`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        title: `[Project Submission] ${data.title}`,
        body: prBody,
        head: branchName,
        base: BASE_BRANCH,
      }),
    });

    if (!createPrRes.ok) {
      const errText = await createPrRes.text();
      console.error("Failed to create PR:", errText);
      return NextResponse.json(
        {
          error: "Project was saved but PR creation failed. Contact the admin.",
        },
        { status: 500 }
      );
    }

    const prData = await createPrRes.json();

    rateLimitMap.set(ip, Date.now());

    return NextResponse.json({
      success: true,
      message: "Project submitted successfully! It will appear after review.",
      prUrl: prData.html_url,
      prNumber: prData.number,
    });
  } catch (error) {
    console.error("Submission error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
