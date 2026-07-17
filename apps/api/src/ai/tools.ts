import { DynamicStructuredTool } from '@langchain/core/tools';
import { z } from 'zod';

export const reserveInventoryTool = new DynamicStructuredTool({
  name: 'reserve_inventory',
  description: 'Reserve a specific quantity of an item from the inventory. Use this when a user asks to reserve stock.',
  schema: z.object({
    itemName: z.string().describe('The name of the item to reserve (e.g., "laptop", "monitor")'),
    quantity: z.number().describe('The quantity of the item to reserve')
  }),
  func: async ({ itemName, quantity }) => {
    // In Phase 4, this will connect to Prisma DB
    return `Successfully reserved ${quantity} units of ${itemName}. The inventory has been updated.`;
  }
});

export const applyLeaveTool = new DynamicStructuredTool({
  name: 'apply_leave',
  description: 'Apply for employee leave for specific dates.',
  schema: z.object({
    startDate: z.string().describe('The start date of the leave in YYYY-MM-DD format'),
    endDate: z.string().describe('The end date of the leave in YYYY-MM-DD format'),
    reason: z.string().describe('The reason for the leave')
  }),
  func: async ({ startDate, endDate, reason }) => {
    // In Phase 4, this will connect to Prisma DB
    return `Leave applied successfully from ${startDate} to ${endDate} for reason: ${reason}. Pending HR approval.`;
  }
});

export const getRevenueTool = new DynamicStructuredTool({
  name: 'get_revenue',
  description: 'Retrieve the total revenue or financial metrics for the current period.',
  schema: z.object({
    period: z.string().describe('The period to check revenue for, e.g., "monthly", "yearly"')
  }),
  func: async ({ period }) => {
    // In Phase 4, this will connect to Prisma DB
    return `The ${period} revenue is currently $128,430. Operations are running at a 12.5% increase compared to last period.`;
  }
});

export const createPurchaseOrderTool = new DynamicStructuredTool({
  name: 'create_purchase_order',
  description: 'Create a new purchase order for procurement.',
  schema: z.object({
    itemName: z.string().describe('The item to purchase'),
    quantity: z.number().describe('The amount to purchase')
  }),
  func: async ({ itemName, quantity }) => {
    // In Phase 4, this will connect to Prisma DB
    return `Purchase order PO-998 has been created for ${quantity} x ${itemName}. Notified the procurement manager.`;
  }
});

export const erpTools = [
  reserveInventoryTool, 
  applyLeaveTool, 
  getRevenueTool, 
  createPurchaseOrderTool
];
