import { Router } from 'express';
import { getInventory, moveStock } from '../controllers/inventoryController';

const router = Router();

router.get('/', getInventory);
router.post('/move', moveStock);

export default router;
