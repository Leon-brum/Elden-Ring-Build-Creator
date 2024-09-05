import Weapon from '../database/models/Weapon'; 
import { ID } from '../interfaces';
import IWeapon from '../interfaces/Weapon/IWeapon';
import { IWeaponModel } from '../interfaces/Weapon/IWeaponModel';

export default class WeaponModel implements IWeaponModel {
  private model = Weapon;

  async findAll(): Promise<IWeapon[]> {
    const weapons = await this.model.findAll();
    return weapons.map(weapon => {
      return {
        id: weapon.id,
        name: weapon.name,
        type: weapon.type,
        forgingStone: weapon.forgingStone as 'standard' | 'somber',
        damage: weapon.damage as IWeapon['damage'],
        defense: weapon.defense as IWeapon['defense'],
        requirements: weapon.requirements as IWeapon['requirements'],
        scaling: weapon.scaling as IWeapon['scaling'],
        weight: weapon.weight,
        passive: weapon.passive,
      };
    });
  }

  async findById(id: number): Promise<IWeapon | null> {
    const weapon = await this.model.findByPk(id);

    if (!weapon) return null;

    return {
      id: weapon.id,
      name: weapon.name,
      type: weapon.type,
      forgingStone: weapon.forgingStone as 'standard' | 'somber',
      damage: weapon.damage as IWeapon['damage'],
      defense: weapon.defense as IWeapon['defense'],
      requirements: weapon.requirements as IWeapon['requirements'],
      scaling: weapon.scaling as IWeapon['scaling'],
      weight: weapon.weight,
      passive: weapon.passive,
    };
  }

  async createWeapon(name: IWeapon['name'], type: IWeapon['type'], forgingStone: IWeapon['forgingStone'], damage: IWeapon['damage'], defense: IWeapon['defense'], requirements: IWeapon['requirements'], scaling: IWeapon['scaling'], weight: IWeapon['weight'], passive: IWeapon['passive']): Promise<IWeapon> {
    const newWeapon = await this.model.create({
      name,
      type,
      forgingStone,
      damage,
      defense,
      requirements,
      scaling,
      weight,
      passive,
    });
    return {
      id: newWeapon.id,
      name: newWeapon.name,
      type: newWeapon.type,
      forgingStone: newWeapon.forgingStone as 'standard' | 'somber',
      damage: newWeapon.damage as IWeapon['damage'],
      defense: newWeapon.defense as IWeapon['defense'],
      requirements: newWeapon.requirements as IWeapon['requirements'],
      scaling: newWeapon.scaling as IWeapon['scaling'],
      weight: newWeapon.weight,
      passive: newWeapon.passive,
    };
  }
}