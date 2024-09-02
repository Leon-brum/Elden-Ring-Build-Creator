import { Router, Request, Response } from 'express';
import WeaponController from '../controller/weapon.controller';

const weaponController = new WeaponController();

const router = Router();

router.get('/',
  (req: Request, res: Response) => weaponController.getAllWeapons(req, res)
);

export default router;
