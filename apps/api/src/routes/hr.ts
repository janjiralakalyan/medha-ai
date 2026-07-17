import { Router } from 'express';
import { getEmployees, createEmployee, getLeaveRequests } from '../controllers/hrController';

const router = Router();

router.get('/employees', getEmployees);
router.post('/employees', createEmployee);
router.get('/leaves', getLeaveRequests);

export default router;
