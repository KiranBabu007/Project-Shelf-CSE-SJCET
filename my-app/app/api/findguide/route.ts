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

// Find similar projects using TF-IDF
const findSimilarProjects = (queryText: string, limit: number = 5) => {
  // Prepare all projects
  const allProjects = Object.entries(projectsData).flatMap(([year, projects]) => 
    (projects as Project[]).map(project => ({
      ...project,
      year
    }))
  );
  
  // Process text - lowercase, remove punctuation, tokenize
  const preprocessText = (text: string) => {
    return text.toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(word => word.length > 2);
  };
  
  // Common English stopwords
  const stopwords = new Set([
    "the", "and", "for", "with", "that", "this", "not", "are", "you", "your",
    "from", "have", "has", "had", "was", "were", "will", "can", "project","application","I","idea","have"
  ]);
  
  // Calculate term frequencies for a document
  const calculateTF = (tokens: string[]) => {
    const tf: Record<string, number> = {};
    tokens.forEach(token => {
      if (!stopwords.has(token)) {
        tf[token] = (tf[token] || 0) + 1;
      }
    });
    return tf;
  };
  
  // Calculate document frequencies
  const calculateIDF = (documents: string[][]) => {
    const idf: Record<string, number> = {};
    const uniqueTerms = new Set<string>();
    
    // Count documents containing each term
    documents.forEach(doc => {
      const terms = new Set(doc);
      terms.forEach(term => {
        if (!stopwords.has(term)) {
          idf[term] = (idf[term] || 0) + 1;
          uniqueTerms.add(term);
        }
      });
    });
    
    // Calculate IDF
    const docCount = documents.length;
    uniqueTerms.forEach(term => {
      idf[term] = Math.log(docCount / (idf[term] || 1));
    });
    
    return idf;
  };
  
  // Calculate TF-IDF scores
  const calculateTFIDF = (tf: Record<string, number>, idf: Record<string, number>) => {
    const tfidf: Record<string, number> = {};
    Object.keys(tf).forEach(term => {
      tfidf[term] = tf[term] * (idf[term] || 0);
    });
    return tfidf;
  };
  
  // Preprocess all project texts
  const projectTexts = allProjects.map(project => {
    // Combine title, description and tags with different weights
    const combinedText = 
      `${project.title} ${project.title} ` + // Title twice for more weight
      `${project.description} ` +
      `${project.tags.join(' ')} ${project.tags.join(' ')}`; // Tags twice for more weight
    return preprocessText(combinedText);
  });
  
  // Add query text for processing
  const queryTokens = preprocessText(queryText);
  const allTexts = [...projectTexts, queryTokens];
  
  // Calculate TF-IDF vectors
  const idf = calculateIDF(allTexts);
  const projectVectors = projectTexts.map(text => calculateTFIDF(calculateTF(text), idf));
  const queryVector = calculateTFIDF(calculateTF(queryTokens), idf);
  
  // Calculate cosine similarities
  const similarities = projectVectors.map((vector, idx) => {
    // Get all unique terms from both vectors
    const terms = new Set([...Object.keys(vector), ...Object.keys(queryVector)]);
    
    let dotProduct = 0;
    let normA = 0;
    let normB = 0;
    
    terms.forEach(term => {
      const a = vector[term] || 0;
      const b = queryVector[term] || 0;
      dotProduct += a * b;
      normA += a * a;
      normB += b * b;
    });
    
    const similarity = dotProduct / (Math.sqrt(normA) * Math.sqrt(normB) || 1);
    
    return {
      project: allProjects[idx],
      similarity: isNaN(similarity) ? 0 : similarity
    };
  });
  
  // Sort by similarity and filter by threshold before returning
  const SIMILARITY_THRESHOLD = 0.20; // Adjust this value as needed
  
  return similarities
    .sort((a, b) => b.similarity - a.similarity)
    .filter(item => item.similarity >= SIMILARITY_THRESHOLD)
    .slice(0, limit)
    .map(item => item.project);
};

// Rest of your code remains the same
const recommendGuide = (description: string, similarProjects: Project[]) => {
  // Count occurrences of each supervisor with weighting
  const supervisorScores: Record<string, {count: number, score: number, projects: Project[]}> = {};
  
  similarProjects.forEach((project, index) => {
    // Add weighting based on similarity position (earlier = more similar)
    const weight = similarProjects.length - index;
    
    if (!supervisorScores[project.supervisor]) {
      supervisorScores[project.supervisor] = {count: 0, score: 0, projects: []};
    }
    supervisorScores[project.supervisor].count += 1;
    supervisorScores[project.supervisor].score += weight;
    supervisorScores[project.supervisor].projects.push(project);
  });
  
  // Find best supervisor match based on weighted score
  let bestMatch = '';
  let highestScore = 0;
  let bestProjects: Project[] = [];
  
  for (const supervisor in supervisorScores) {
    if (supervisorScores[supervisor].score > highestScore) {
      highestScore = supervisorScores[supervisor].score;
      bestMatch = supervisor;
      bestProjects = supervisorScores[supervisor].projects;
    }
  }
  
  // Extract key themes from the request description
  const descWords = description.toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 3);
  
  // Organize tags by frequency across relevant projects
  const tagFrequency: Record<string, number> = {};
  bestProjects.forEach(project => {
    project.tags.forEach(tag => {
      tagFrequency[tag] = (tagFrequency[tag] || 0) + 1;
    });
  });
  
  // Sort tags by frequency
  const relevantTags = Object.entries(tagFrequency)
    .sort((a, b) => b[1] - a[1])
    .map(([tag]) => tag);
  
  // Find most relevant expertise areas based on tags
  const expertiseAreas = relevantTags.slice(0, 3);
  
  // Create a more engaging and informative explanation
  const recommendation = `Based on your project description about ${
    descWords.slice(0, 5).join(" ")
  }..., I recommend **${bestMatch}** as your project guide.

**Why Prof. ${bestMatch.split(' ')[1] || bestMatch}?**
- Has supervised ${bestProjects.length} similar projects including: ${bestProjects.map(p => `"${p.title}"`).join(', ')}
- Demonstrates expertise in ${expertiseAreas.join(', ')}
- Has experience guiding projects with similar technical requirements

**Key matching technologies:** ${relevantTags.join(', ')}

**Project alignment:** The technologies and concepts in your project description align closely with ${bestMatch}'s past supervision work, particularly in ${expertiseAreas[0] || 'this area'}.

They would be an excellent mentor for your project based on their demonstrated experience and relevant expertise.`;
  
  return {
    recommendation,
    guidesReferenced: similarProjects.map(p => p.supervisor),
    similarProjects: similarProjects.map(p => ({
      title: p.title,
      supervisor: p.supervisor,
      tags: p.tags,
      students: p.students, // Add this line to include student information
      year: p.year // Include year information
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

    // Find similar projects using TF-IDF (no async/await needed)
    const similarProjects = findSimilarProjects(description, 5);
    
    // Check if any similar projects were found
    if (similarProjects.length === 0) {
      return NextResponse.json({
        recommendation: "No similar projects found. Please try refining your project description or explore a different project idea.",
        guidesReferenced: [],
        similarProjects: []
      });
    }
    
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
