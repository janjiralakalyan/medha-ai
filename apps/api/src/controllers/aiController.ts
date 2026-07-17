import { Request, Response } from 'express';
import { erpAgent } from '../ai/agent';
import { HumanMessage } from '@langchain/core/messages';
import { AuthRequest } from '../middleware/auth';

export const chat = async (req: AuthRequest, res: Response) => {
  try {
    const { message, threadId = 'default_thread' } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // In a production app, threadId would be tied to the req.user.userId
    const config = { configurable: { thread_id: threadId } };
    
    // Call the LangGraph agent
    const result = await erpAgent.invoke(
      { messages: [new HumanMessage(message)] },
      config
    );

    // Get the last message which should be the AI's response
    const lastMessage = result.messages[result.messages.length - 1];

    res.json({
      response: lastMessage.content,
      threadId,
    });
  } catch (error) {
    console.error('Error in AI chat controller:', error);
    res.status(500).json({ error: 'Failed to process AI request' });
  }
};
