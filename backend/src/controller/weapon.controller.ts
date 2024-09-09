import { Request, Response } from 'express';
import WeaponService from '../services/weapons.service';
import mapStatusHTTP from '../utils/MapStatusHTTP';
import { number } from 'joi';

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

  public async createWeapon(req: Request, res:Response):Promise<Response>{
    const {
      name,
      type,
      forgingStone,
      damage,
      defense,
      requirements,
      scaling,
      weight,
      passive,
    } = req.body

    try {
        const serviceResponse = await this.weaponService.createWeapon(
        name,
        type,
        forgingStone,
        damage,
        defense,
        requirements,
        scaling,
        weight,
        passive,
      )

      if (serviceResponse.status !== "SUCCESSFUL"){
        return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data)
      }
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    } catch (error) {
      return res.status(500).json({ message: `Erro interno: ${error}` });
    }
  }

  public async updateWeapon(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const updates = req.body;

    try {
      const serviceResponse = await this.weaponService.updateWeapon(Number(id), updates);

      if (serviceResponse.status !== "SUCCESSFUL") {
        return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
      }

      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    } catch (error) {
      return res.status(500).json({ message: `Erro interno: ${error}` });
    }
  }

  public async deleteWeapon (req: Request, res: Response):Promise<Response>{
    const { id } = req.params;
    try {
      const serviceResponse = await this.weaponService.deleteWeapon(Number(id));

      if (serviceResponse.status !== "SUCCESSFUL"){
        return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data)
      }
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data)
    } catch (error) {
      return res.status(500).json({ message: `Erro interno: ${error}` })
    }
  }
}