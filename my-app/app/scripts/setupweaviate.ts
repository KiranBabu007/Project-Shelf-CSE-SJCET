const weaviate = require("weaviate-ts-client");
require("dotenv").config(); // Load API keys from .env

const client = weaviate.createclient({
  scheme: "https",
  host: process.env.WEAVIATE_HOST,
  apiKey: process.env.WEAVIATE_API_KEY 
});

async function createSchema() {
  try {
    await client.schema.classCreator().withClass({
      class: "Project",
      vectorizer: "text2vec-openai",
      properties: [
        { name: "title", dataType: ["text"] },
        { name: "description", dataType: ["text"] },
        { name: "students", dataType: ["text"] },
        { name: "supervisor", dataType: ["text"] },
        { name: "tags", dataType: ["text[]"] }
      ]
    }).do();

    console.log("✅ Schema created successfully!");
  } catch (error) {
    console.error("❌ Schema creation failed:", error);
  }
}

createSchema();
