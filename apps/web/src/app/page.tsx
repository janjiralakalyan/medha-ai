import { Users, Box, ShoppingCart, DollarSign, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { RevenueChart } from '@/components/dashboard/RevenueChart';

const summaryCards = [
  { title: 'Total Revenue', value: '$128,430', change: '+12.5%', icon: DollarSign, trend: 'up' },
  { title: 'Active Employees', value: '1,240', change: '+3.2%', icon: Users, trend: 'up' },
  { title: 'Pending Approvals', value: '24', change: '-5.1%', icon: ShoppingCart, trend: 'down' },
  { title: 'Low Stock Items', value: '12', change: '+2.4%', icon: Box, trend: 'up' },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Overview</h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-1">Here's what's happening across your enterprise today.</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card, i) => (
          <div key={i} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{card.title}</p>
                <h3 className="text-3xl font-bold mt-2 text-zinc-900 dark:text-zinc-50">{card.value}</h3>
              </div>
              <div className="p-3 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl">
                <card.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm">
              <span className={`flex items-center font-medium ${card.trend === 'up' ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
                {card.trend === 'up' ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
                {card.change}
              </span>
              <span className="text-zinc-500 dark:text-zinc-400">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts & AI Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-6">Revenue & Expenses Trend</h3>
          <RevenueChart />
        </div>
        
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border border-indigo-100 dark:border-indigo-900/50 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100">Copilot Insights</h3>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm rounded-xl p-4 border border-indigo-50 dark:border-indigo-800/30">
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                <strong className="text-indigo-600 dark:text-indigo-400">Inventory Alert:</strong> 12 items in the Hyderabad warehouse have fallen below the minimum stock level. 
                <button className="text-indigo-600 dark:text-indigo-400 hover:underline ml-1 font-medium">Create PO</button>
              </p>
            </div>
            <div className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm rounded-xl p-4 border border-indigo-50 dark:border-indigo-800/30">
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                <strong className="text-emerald-600 dark:text-emerald-400">Revenue Insight:</strong> Sales have increased by 12.5% this month compared to last month.
              </p>
            </div>
            <div className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm rounded-xl p-4 border border-indigo-50 dark:border-indigo-800/30">
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                <strong className="text-amber-600 dark:text-amber-400">Pending Actions:</strong> 24 purchase orders require your approval.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
