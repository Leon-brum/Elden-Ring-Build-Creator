import { Request, Response } from 'express';
import WeaponService from '../services/weapons.service';
import mapStatusHTTP from '../utils/MapStatusHTTP';

export default class WeaponController {
  constructor(private weaponService = new WeaponService()) { }

  public async getAllWeapons(_req: Request, res: Response) {
    const serviceResponse = await this.weaponService.getAllWeapons();
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data); 
  }

  public async getByIdWeapon(req: Request, res: Response) {
    const { id } = req.params;
    const serviceResponse = await this.weaponService.getByIdWeapon(Number(id));
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
}