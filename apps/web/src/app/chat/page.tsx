import { ChatInterface } from '@/components/chat/ChatInterface';

export default function ChatPage() {
  return (
    <div className="h-full flex flex-col max-w-4xl mx-auto w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">MEDHA AI</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mt-1">Control your enterprise operations through natural language.</p>
      </div>
      
      <div className="flex-1 min-h-[500px]">
        <ChatInterface />
      </div>
    </div>
  );
}
