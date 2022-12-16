import { Router } from 'express';
const router = new Router();
import { TypeController } from '../controllers/typeController.js';
import { roleMiddle } from '../middleware/checkRoleMiddleware.js';

router.post('/',roleMiddle("ADMIN"), TypeController.create)
router.get('/', TypeController.getAll)

export default router