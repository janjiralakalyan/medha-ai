import { ChatOllama } from '@langchain/community/chat_models/ollama';
import { createReactAgent } from '@langchain/langgraph/prebuilt';
import { MemorySaver } from '@langchain/langgraph';
import { erpTools } from './tools';

// Initialize the Local Ollama Model (e.g., Llama 3)
const llm = new ChatOllama({
  model: 'llama3', // Or any local model you have installed in Ollama
  baseUrl: 'http://localhost:11434', // Default Ollama port
  temperature: 0.1, // Keep it deterministic for enterprise function calling
});

// Setup memory to maintain conversation context
const memory = new MemorySaver();

// Create the LangGraph React Agent
export const erpAgent = createReactAgent({
  llm,
  tools: erpTools,
  checkpointSaver: memory,
  messageModifier: `You are MEDHA, an elite enterprise AI Copilot running securely and locally on-premise. 
Your goal is to help employees manage their business operations efficiently without external internet reliance.
You have access to tools that can interact with the company's ERP modules: HR, Inventory, Procurement, and Finance.
When a user asks you to perform an action, you must extract the relevant entities and call the appropriate tool.
If the request is ambiguous, ask for clarification.
Always maintain a professional, helpful, and concise enterprise tone. 
Do not hallucinate data; always use your provided tools to fetch real data.`
});
