import Weapon from '../database/models/Weapon'; 
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
}