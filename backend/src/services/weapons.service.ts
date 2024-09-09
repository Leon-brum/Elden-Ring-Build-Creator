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

  public async createWeapon(name: IWeapon['name'], type: IWeapon['type'], forgingStone: IWeapon['forgingStone'], damage: IWeapon['damage'], defense: IWeapon['defense'], requirements: IWeapon['requirements'], scaling: IWeapon['scaling'], weight: IWeapon['weight'], passive: IWeapon['passive']): Promise<ServiceResponse<IWeapon>> {
    const weapon = await this.weaponModel.createWeapon(
      name,
      type,
      forgingStone,
      damage,
      defense,
      requirements,
      scaling,
      weight,
      passive
    )

    return { status: "CREATE", data: weapon }
  }

  public async updateWeapon(
    id: number,
    updates: Partial<IWeapon>
  ): Promise<ServiceResponse<IWeapon | ServiceMessage>> {
    const updatedWeapon = await this.weaponModel.updateWeapon(id, updates);

    if (!updatedWeapon) {
      return { status: "NOT_FOUND", data: { message: 'Arma não encontrada!' } };
    }

    return { status: "SUCCESSFUL", data: updatedWeapon };
  }

  public async deleteWeapon(id:number): Promise<ServiceResponse<ServiceMessage>>{
    const exist = await this.weaponModel.deleteWeapon(id);
    if (!exist) return { status:'NOT_FOUND', data: { message: 'Id não encontrado' } }
    return { status: "SUCCESSFUL", data: { message:'Arma deletada' } }
  }
}