import { Router } from 'express';
import userRouter from './userRouter';
import weaponRouter from './weaponRouter';

const router = Router();
router.use('/login', userRouter);
router.use('/weapon', weaponRouter);

export default router;