import Link from 'next/link';
import { LayoutDashboard, Users, Box, ShoppingCart, DollarSign, MessageSquareText } from 'lucide-react';

const navItems = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'HR', href: '/hr', icon: Users },
  { name: 'Inventory', href: '/inventory', icon: Box },
  { name: 'Procurement', href: '/procurement', icon: ShoppingCart },
  { name: 'Finance', href: '/finance', icon: DollarSign },
];

export function Sidebar() {
  return (
    <aside className="w-64 flex-shrink-0 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-md border-r border-zinc-200 dark:border-zinc-800 flex flex-col h-full sticky top-0">
      <div className="h-16 flex items-center px-6 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-xl tracking-tight">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
            E
          </div>
          MEDHA AI
        </div>
      </div>
      
      <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
        <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4 px-2">
          Modules
        </div>
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900/50 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-200 group"
          >
            <item.icon className="w-5 h-5 text-zinc-400 group-hover:text-indigo-500 transition-colors" />
            <span className="font-medium text-sm">{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
        <Link
          href="/chat"
          className="flex items-center justify-center gap-2 w-full py-3 bg-zinc-900 hover:bg-zinc-800 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white rounded-xl font-medium shadow-lg transition-all"
        >
          <MessageSquareText className="w-4 h-4" />
          Copilot Chat
        </Link>
      </div>
    </aside>
  );
}
