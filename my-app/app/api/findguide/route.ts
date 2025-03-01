import { NextResponse } from "next/server";
import projectsData from "@/app/project-shelf/projects";

interface Project {
  id: number;
  title: string;
  description: string;
  students: string;
  supervisor: string;
  tags: string[];
  year?: string;
}

// Find similar projects using text similarity
const findSimilarProjects = (queryText: string, limit: number = 3) => {
  // Prepare the corpus from all projects
  const allProjects = Object.entries(projectsData).flatMap(([year, projects]) => 
    (projects as Project[]).map(project => ({
      ...project,
      year
    }))
  );

  // Preprocess text - lowercase, remove punctuation, split into words
  const preprocessText = (text: string) => {
    return text.toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(word => word.length > 2); // Filter out very short words
  };
  
  // Extract query keywords
  const queryWords = new Set(preprocessText(queryText));
  
  // Calculate similarity scores for each project
  const scoredProjects = allProjects.map(project => {
    // Combine relevant text fields
    const projectText = `${project.title} ${project.description} ${project.tags.join(' ')}`;
    const projectWords = preprocessText(projectText);
    
    // Count matching words
    let matchCount = 0;
    projectWords.forEach(word => {
      if (queryWords.has(word)) {
        matchCount++;
      }
    });
    
    // Simple similarity score - number of matching words divided by query length
    const similarity = queryWords.size > 0 ? matchCount / queryWords.size : 0;
    
    return {
      project,
      similarity
    };
  });
  
  // Sort by similarity score and return top matches
  return scoredProjects
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, limit)
    .map(item => item.project);
};

// Generate guide recommendation
const recommendGuide = (description: string, similarProjects: Project[]) => {
  // Count occurrences of each supervisor
  const supervisorCounts: Record<string, number> = {};
  similarProjects.forEach(project => {
    supervisorCounts[project.supervisor] = (supervisorCounts[project.supervisor] || 0) + 1;
  });
  
  // Find most frequent supervisor
  let bestMatch = '';
  let highestCount = 0;
  
  for (const supervisor in supervisorCounts) {
    if (supervisorCounts[supervisor] > highestCount) {
      highestCount = supervisorCounts[supervisor];
      bestMatch = supervisor;
    }
  }
  
  // Collect projects by the recommended supervisor
  const projectsWithSupervisor = similarProjects
    .filter(p => p.supervisor === bestMatch)
    .map(p => p.title);

  // Get relevant tags from similar projects
  const relevantTags = new Set<string>();
  similarProjects.forEach(p => p.tags.forEach(tag => relevantTags.add(tag)));
  
  // Create explanation
  const recommendation = `Based on your project description: "${description.substring(0, 100)}${description.length > 100 ? '...' : ''}", 
I recommend ${bestMatch} as your project guide.

${bestMatch} has supervised similar projects including: ${projectsWithSupervisor.join(', ')}.

These projects involve technologies and concepts such as: ${Array.from(relevantTags).join(', ')}.

Their experience with these topics makes them well-suited to guide your project.`;
  
  return {
    recommendation,
    guidesReferenced: similarProjects.map(p => p.supervisor),
    similarProjects: similarProjects.map(p => ({
      title: p.title,
      supervisor: p.supervisor,
      tags: p.tags
    }))
  };
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { description } = body;
    
    if (!description) {
      return NextResponse.json(
        { error: "Project description is required" },
        { status: 400 }
      );
    }

    // Find similar projects
    const similarProjects = findSimilarProjects(description, 3);
    
    // Get recommendation
    const result = recommendGuide(description, similarProjects);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}