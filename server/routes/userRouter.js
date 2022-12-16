import { Router } from 'express';
const router = new Router();
import { UserController } from '../controllers/userController.js';
import {authMiddle} from '../middleware/authMiddleware.js';

router.post('/registration', UserController.registration )
router.post('/login', UserController.login )
router.get('/auth',authMiddle , UserController.check )


export default router