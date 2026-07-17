import { Users, FileText, Briefcase } from 'lucide-react';

export default function HRPage() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Human Resources</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mt-1">Manage employees, leaves, and payroll securely.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:border-indigo-500/50 transition-colors cursor-pointer">
          <div className="p-3 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl w-fit mb-4">
            <Users className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Employee Directory</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">View and manage 1,240 active employees.</p>
        </div>
        
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:border-indigo-500/50 transition-colors cursor-pointer">
          <div className="p-3 bg-emerald-50 dark:bg-emerald-500/10 rounded-xl w-fit mb-4">
            <FileText className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Leave Management</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">Approve or reject 42 pending leave requests.</p>
        </div>

        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:border-indigo-500/50 transition-colors cursor-pointer">
          <div className="p-3 bg-amber-50 dark:bg-amber-500/10 rounded-xl w-fit mb-4">
            <Briefcase className="w-6 h-6 text-amber-600 dark:text-amber-400" />
          </div>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Payroll Processing</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">Process monthly salary for all departments.</p>
        </div>
      </div>

      <div className="mt-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-4">Recent HR Activities</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800">
            <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center font-medium">JD</div>
            <div>
              <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">John Doe joined Engineering</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">2 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
