import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getInventory = async (req: Request, res: Response) => {
  try {
    const inventory = await prisma.product.findMany({
      include: {
        category: true,
      }
    });
    res.json(inventory);
  } catch (error) {
    console.error('Error fetching inventory:', error);
    res.status(500).json({ error: 'Failed to fetch inventory' });
  }
};

export const moveStock = async (req: Request, res: Response) => {
  try {
    const { productId, warehouseId, type, quantity, notes } = req.body;
    
    // Update product stock directly
    const product = await prisma.product.update({
      where: { id: productId },
      data: {
        stockQuantity: type === 'IN' ? { increment: quantity } : { decrement: quantity }
      }
    });

    // Record movement
    const movement = await prisma.stockMovement.create({
      data: {
        productId,
        warehouseId,
        type,
        quantity,
        notes
      }
    });
    
    res.status(201).json({ movement, product });
  } catch (error) {
    console.error('Error moving stock:', error);
    res.status(500).json({ error: 'Failed to record stock movement' });
  }
};
