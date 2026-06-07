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

const rateLimitMap = new Map<string, number>();
const RATE_LIMIT_WINDOW_MS = 60_000;

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
  if (!secret) return true;

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
    data.projectType === "mini" ? `\n    projectType: "mini" as const,` : "";

  return `  {
    id: ${nextId},
    title: "${title}",
    description:
      "${description}",
    students: "${students}",
    supervisor: "${supervisor}",
    tags: [${tags}],${typeLine}
  }`;
}

const VALID_YEARS = [
  "2017-2018",
  "2018-2019",
  "2019-2020",
  "2020-2021",
  "2021-2022",
  "2022-2023",
  "2023-2024",
  "2024-2025",
  "2025-2026",
];

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validation = validateSubmission(body);

    if (!validation.valid) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

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

    if (!VALID_YEARS.includes(data.year)) {
      return NextResponse.json(
        { error: `Year "${data.year}" is not a valid academic year.` },
        { status: 400 }
      );
    }

    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    if (!GITHUB_TOKEN) {
      return NextResponse.json(
        { error: "GitHub integration is not configured. Please contact the admin." },
        { status: 503 }
      );
    }

    const REPO_OWNER = "KiranBabu007";
    const REPO_NAME = "Project-Shelf-CSE-SJCET";
    const YEAR_FILE_PATH = `my-app/app/project-shelf/data/${data.year}.ts`;
    const BASE_BRANCH = "main";

    const ghHeaders = {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
      "X-GitHub-Api-Version": "2022-11-28",
    };

    const apiBase = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}`;

    // 1. Fetch the year-specific file (NOT the monolithic file)
    const fileRes = await fetch(
      `${apiBase}/contents/${YEAR_FILE_PATH}?ref=${BASE_BRANCH}`,
      { headers: ghHeaders }
    );

    if (!fileRes.ok) {
      const errText = await fileRes.text();
      console.error("Failed to fetch year file:", errText);
      return NextResponse.json(
        { error: `Could not find data file for year "${data.year}".` },
        { status: 500 }
      );
    }

    const fileData = await fileRes.json();
    const currentContent = Buffer.from(fileData.content, "base64").toString(
      "utf-8"
    );

    // 2. Compute next ID from this year's file only
    let maxId = 0;
    const idRegex = /id:\s*(\d+)/g;
    let idMatch: RegExpExecArray | null;
    while ((idMatch = idRegex.exec(currentContent)) !== null) {
      const num = parseInt(idMatch[1], 10);
      if (num > maxId) maxId = num;
    }
    const nextId = maxId + 1;

    const newEntry = buildProjectEntry(data, nextId);

    // 3. Insert the new project at its alphabetically sorted position.
    // Sorted insertion means two PRs for the same year typically touch
    // different lines, allowing git's 3-way merge to auto-resolve.
    const closingBracketIdx = currentContent.lastIndexOf("];");
    if (closingBracketIdx === -1) {
      return NextResponse.json(
        { error: "Year data file has unexpected format." },
        { status: 500 }
      );
    }

    const arrayStartIdx = currentContent.indexOf("[");
    const arrayContent = currentContent
      .substring(arrayStartIdx + 1, closingBracketIdx)
      .trim();

    let updatedContent: string;
    if (arrayContent.length === 0) {
      updatedContent =
        currentContent.substring(0, closingBracketIdx) +
        "\n" +
        newEntry +
        ",\n" +
        currentContent.substring(closingBracketIdx);
    } else {
      // Extract all existing titles with their positions in the file
      const titleRegex = /title:\s*\n?\s*"([^"]+)"/g;
      const existingTitles: { title: string; matchIndex: number }[] = [];
      let titleMatch: RegExpExecArray | null;
      while ((titleMatch = titleRegex.exec(currentContent)) !== null) {
        if (titleMatch.index > arrayStartIdx && titleMatch.index < closingBracketIdx) {
          existingTitles.push({
            title: titleMatch[1].toLowerCase(),
            matchIndex: titleMatch.index,
          });
        }
      }

      const newTitleLower = data.title.toLowerCase();

      // Find the first project whose title sorts after the new one
      const insertBeforeIdx = existingTitles.findIndex(
        (t) => t.title.localeCompare(newTitleLower) > 0
      );

      if (insertBeforeIdx === -1) {
        // New project sorts last -- append at the end of the array
        const lastObjEnd = currentContent.lastIndexOf("}", closingBracketIdx);
        const afterLastObj = currentContent
          .substring(lastObjEnd + 1, closingBracketIdx)
          .trim();
        const needsComma = !afterLastObj.startsWith(",");
        const prefix = currentContent.substring(0, lastObjEnd + 1);
        const suffix = currentContent.substring(lastObjEnd + 1);
        updatedContent = needsComma
          ? prefix + ",\n" + newEntry + "," + suffix
          : prefix + "\n" + newEntry + "," + suffix;
      } else {
        // Find the opening `{` of the project block that should come after
        const targetTitleIdx = existingTitles[insertBeforeIdx].matchIndex;
        const blockStart = currentContent.lastIndexOf("{", targetTitleIdx);
        // Walk back to find the `  {` indentation start (beginning of line)
        let lineStart = blockStart;
        while (lineStart > 0 && currentContent[lineStart - 1] !== "\n") {
          lineStart--;
        }
        const prefix = currentContent.substring(0, lineStart);
        const suffix = currentContent.substring(lineStart);
        updatedContent = prefix + newEntry + ",\n" + suffix;
      }
    }

    // 4. Create a new branch
    const branchName = `project-submission/${data.year}/${data.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .slice(0, 40)}-${Date.now()}`;

    const refRes = await fetch(
      `${apiBase}/git/ref/heads/${BASE_BRANCH}`,
      { headers: ghHeaders }
    );

    if (!refRes.ok) {
      return NextResponse.json(
        { error: "Failed to access repository" },
        { status: 500 }
      );
    }

    const refData = await refRes.json();
    const baseSha = refData.object.sha;

    const createBranchRes = await fetch(`${apiBase}/git/refs`, {
      method: "POST",
      headers: ghHeaders,
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

    // 5. Update the year-specific file on the new branch
    const updateFileRes = await fetch(
      `${apiBase}/contents/${YEAR_FILE_PATH}`,
      {
        method: "PUT",
        headers: ghHeaders,
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
*This PR was auto-generated from the Project Shelf submission form.*
*File modified: \`${YEAR_FILE_PATH}\`*`;

    const createPrRes = await fetch(`${apiBase}/pulls`, {
      method: "POST",
      headers: ghHeaders,
      body: JSON.stringify({
        title: `[Project Submission] ${data.title} (${data.year})`,
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
