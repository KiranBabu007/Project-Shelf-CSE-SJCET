// File: app/api/find-guide/route.ts
import { NextResponse } from "next/server";
import { OpenAIEmbeddings } from "@langchain/openai";
import { FaissStore } from "@langchain/community/vectorstores/faiss";
import { OpenAI } from "@langchain/openai";
import { RetrievalQAChain } from "langchain/chains";
import { PromptTemplate } from "@langchain/core/prompts";


interface Project {
  id: string;
  title: string;
  description: string;
  students: string;
  supervisor: string;
  tags: string[];
}

const projectsData: Record<string, Project[]> = {
  "2024": [
    {
      id: "1",
      title: "AI-Powered Attendance System",
      description: "A facial recognition system for automating classroom attendance using deep learning and computer vision techniques.",
      students: "Alice Johnson, Bob Smith",
      supervisor: "Dr. Sarah Johnson",
      tags: ["AI", "Computer Vision", "Deep Learning"]
    },
    {
      id: "2",
      title: "Smart IoT Agricultural Monitoring",
      description: "IoT-based system for monitoring soil moisture, temperature, and other parameters for smart farming applications.",
      students: "Charlie Brown, Diana Prince",
      supervisor: "Dr. Michael Chen",
      tags: ["IoT", "Embedded Systems", "Agriculture"]
    }
  ]
};

const prepareProjectData = () => {
  return Object.entries(projectsData).flatMap(([year, projects]) =>
    projects.map(project => ({
      pageContent: `Project Title: ${project.title}\nDescription: ${project.description}\nTags: ${project.tags.join(", ")}\nYear: ${year}`,
      metadata: {
        projectId: project.id,
        supervisor: project.supervisor,
        year
      }
    }))
  );
};

let vectorStore: FaissStore | null = null;

const initVectorStore = async (): Promise<FaissStore> => {
  if (vectorStore) return vectorStore;
  try {
    const embeddings = new OpenAIEmbeddings({
      openAIApiKey: process.env.OPENAI_API_KEY as string
    });
    const documents = prepareProjectData();
    vectorStore = await FaissStore.fromDocuments(documents, embeddings);
    return vectorStore;
  } catch (error) {
    console.error("Failed to initialize vector store:", error);
    throw error;
  }
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { description } = body;
    if (!description) {
      return NextResponse.json({ error: "Project description is required" }, { status: 400 });
    }

    const store = await initVectorStore();
    const retriever = store.asRetriever({ searchType: "similarity", k: 3 });
    const model = new OpenAI({
      openAIApiKey: process.env.OPENAI_API_KEY as string,
      temperature: 0.3
    });

    const promptTemplate = new PromptTemplate({
      template: `
        You are an expert project guide recommender for computer science students.
        Based on the following project description: {query}
        And these similar past projects with their guides: {context}
        Recommend the best guide for this new project.
      `,
      inputVariables: ["query", "context"]
    });

    const chain = RetrievalQAChain.fromLLM(model, retriever, {
      returnSourceDocuments: true,
      prompt: promptTemplate
    });

    const response = await chain.call({ query: description });
    const guidesReferenced = response.sourceDocuments.map(doc => doc.metadata.supervisor);
    
    return NextResponse.json({ recommendation: response.text, guidesReferenced });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
} 
