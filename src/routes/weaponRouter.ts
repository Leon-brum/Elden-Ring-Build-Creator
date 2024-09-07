import { Router, Request, Response } from 'express';
import WeaponController from '../controller/weapon.controller';

const weaponController = new WeaponController();

const router = Router();

router.get('/',
  (req: Request, res: Response) => weaponController.getAllWeapons(req, res)
);
router.get('/:id',
  (req: Request, res:Response) => weaponController.getByIdWeapon(req, res)
);
router.post('/',
  (req: Request, res: Response) => weaponController.createWeapon(req, res)
)
router.put('/:id',
  (req: Request, res:Response) => weaponController.updateWeapon(req, res)
)

export default router;
