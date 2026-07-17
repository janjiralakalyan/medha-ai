"use client";

import { useState, useRef, useEffect } from 'react';
import { Send, Mic, Paperclip, Bot, User, Sparkles } from 'lucide-react';

type Message = {
  id: string;
  role: 'user' | 'ai';
  content: string;
};

const SUGGESTED_PROMPTS = [
  "Apply leave tomorrow.",
  "Create PO for 100 laptops.",
  "Show monthly revenue.",
  "What are this month's losses?"
];

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'ai',
      content: 'Hello! I am MEDHA, your enterprise AI assistant. How can I help you manage your workflows today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const newUserMessage: Message = { id: Date.now().toString(), role: 'user', content: text };
    setMessages(prev => [...prev, newUserMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const newAiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        content: `I've received your request to "${text}". In a fully integrated environment, I would execute the LangGraph workflow to process this via the backend API.`
      };
      setMessages(prev => [...prev, newAiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-full max-h-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm overflow-hidden animate-in fade-in zoom-in-95 duration-500">
      
      {/* Chat Header */}
      <div className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="font-semibold text-zinc-900 dark:text-zinc-50 text-lg">MEDHA Copilot</h2>
            <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
              Online & Ready
            </p>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-zinc-50/30 dark:bg-zinc-950/30">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center shadow-sm ${msg.role === 'user' ? 'bg-zinc-900 dark:bg-zinc-100' : 'bg-indigo-600'}`}>
              {msg.role === 'user' ? <User className="w-4 h-4 text-white dark:text-zinc-900" /> : <Bot className="w-4 h-4 text-white" />}
            </div>
            <div className={`max-w-[75%] px-5 py-3.5 rounded-2xl text-sm leading-relaxed ${
              msg.role === 'user' 
                ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-tr-sm' 
                : 'bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 shadow-sm rounded-tl-sm'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center shadow-sm">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div className="px-5 py-4 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-sm rounded-2xl rounded-tl-sm flex items-center gap-1.5">
              <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
              <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Prompts */}
      {messages.length === 1 && (
        <div className="px-6 pb-2 pt-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {SUGGESTED_PROMPTS.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSend(prompt)}
                className="whitespace-nowrap px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-xs font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="p-4 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
        <div className="flex items-end gap-2 bg-zinc-100 dark:bg-zinc-800 rounded-2xl p-2 pr-2 border border-transparent focus-within:border-indigo-500/50 focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all">
          <button className="p-3 text-zinc-500 hover:text-indigo-600 transition-colors rounded-xl">
            <Paperclip className="w-5 h-5" />
          </button>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend(input);
              }
            }}
            placeholder="Type your command or ask a question..."
            className="flex-1 max-h-32 min-h-[44px] bg-transparent resize-none py-3 px-2 outline-none text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 text-sm"
            rows={1}
          />
          <button className="p-3 text-zinc-500 hover:text-indigo-600 transition-colors rounded-xl">
            <Mic className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleSend(input)}
            disabled={!input.trim() || isTyping}
            className="p-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-zinc-300 dark:disabled:bg-zinc-700 text-white rounded-xl shadow-md transition-colors disabled:shadow-none"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        <p className="text-center text-[11px] text-zinc-400 mt-3 font-medium">
          MEDHA can make mistakes. Verify important business decisions.
        </p>
      </div>
    </div>
  );
}
