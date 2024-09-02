import WeaponModel from "../model/WeaponModel";
import IWeapon from "../interfaces/Weapon/IWeapon";
import { IWeaponModel } from "../interfaces/Weapon/IWeaponModel";
import { ServiceMessage, ServiceResponse } from '../utils/ServiceResponse'; 

export default class WeaponService {
  constructor(private weaponModel: IWeaponModel = new WeaponModel()) { }

  public async getAllWeapons(): Promise<ServiceResponse<IWeapon[]>>{
    const weapons = await this.weaponModel.findAll();
    return {status: 'SUCCESSFUL', data: weapons};
  }
}