import { Box, ArrowRightLeft, AlertTriangle } from 'lucide-react';

export default function InventoryPage() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Inventory</h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-1">Track stock levels across all enterprise warehouses.</p>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl font-medium shadow-sm transition-colors">
          Add Stock
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:border-indigo-500/50 transition-colors">
          <div className="p-3 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl w-fit mb-4">
            <Box className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Total Products</h3>
          <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mt-2">8,402</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Across 14 categories</p>
        </div>
        
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:border-indigo-500/50 transition-colors">
          <div className="p-3 bg-emerald-50 dark:bg-emerald-500/10 rounded-xl w-fit mb-4">
            <ArrowRightLeft className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Recent Movements</h3>
          <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mt-2">124</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Transfers today</p>
        </div>

        <div className="bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/50 rounded-2xl p-6 shadow-sm hover:border-red-500/50 transition-colors">
          <div className="p-3 bg-red-100 dark:bg-red-900/40 rounded-xl w-fit mb-4">
            <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
          </div>
          <h3 className="text-lg font-semibold text-red-900 dark:text-red-100">Low Stock Alerts</h3>
          <p className="text-3xl font-bold text-red-900 dark:text-red-100 mt-2">12</p>
          <p className="text-xs text-red-700 dark:text-red-400 mt-1">Action required</p>
        </div>
      </div>

      <div className="mt-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Inventory List</h3>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-zinc-50 dark:bg-zinc-950/50 border-b border-zinc-200 dark:border-zinc-800">
              <th className="px-6 py-3 text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Product Name</th>
              <th className="px-6 py-3 text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">SKU</th>
              <th className="px-6 py-3 text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Stock</th>
              <th className="px-6 py-3 text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
              <td className="px-6 py-4 text-sm font-medium text-zinc-900 dark:text-zinc-100">Dell XPS 15</td>
              <td className="px-6 py-4 text-sm text-zinc-500 dark:text-zinc-400">SKU-LAP-001</td>
              <td className="px-6 py-4 text-sm font-medium text-zinc-900 dark:text-zinc-100">45</td>
              <td className="px-6 py-4 text-sm"><span className="px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 text-xs font-medium">In Stock</span></td>
            </tr>
            <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
              <td className="px-6 py-4 text-sm font-medium text-zinc-900 dark:text-zinc-100">Logitech MX Master 3</td>
              <td className="px-6 py-4 text-sm text-zinc-500 dark:text-zinc-400">SKU-ACC-042</td>
              <td className="px-6 py-4 text-sm font-medium text-zinc-900 dark:text-zinc-100">5</td>
              <td className="px-6 py-4 text-sm"><span className="px-2 py-1 rounded-full bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 text-xs font-medium">Low Stock</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
