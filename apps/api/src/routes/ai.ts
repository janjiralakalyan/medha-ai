import { Router } from 'express';
import { chat } from '../controllers/aiController';
import { authenticate } from '../middleware/auth';

const router = Router();

// In a real environment, we'd enable the authenticate middleware
// router.post('/chat', authenticate, chat);

// For local testing without strict JWT setup, we'll leave it open
router.post('/chat', chat);

export default router;
