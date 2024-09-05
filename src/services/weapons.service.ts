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

  public async getByIdWeapon(id: number): Promise<ServiceResponse<IWeapon | null>> {
    const weapon = await this.weaponModel.findById(id)
    if(!weapon) return {status: "NOT_FOUND", data: {
      message: 'Arma não encontrada!'
    }}
    return { status: "SUCCESSFUL", data: weapon }
  }
}