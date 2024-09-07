import IWeapon from './IWeapon';
import { ID } from '..';

export interface IWeaponModel {
    findAll(): Promise<IWeapon[]>,
    findById(id: ID): Promise<IWeapon | null>,
    createWeapon(
        name: IWeapon['name'],
        type: IWeapon['type'],
        forgingStone: IWeapon['forgingStone'],
        damage: IWeapon['damage'],
        defense: IWeapon['defense'],
        requirements: IWeapon['requirements'],
        scaling: IWeapon['scaling'],
        weight: IWeapon['weight'],
        passive: IWeapon['passive']
    ): Promise<IWeapon>,
    updateWeapon(
        id: ID,
        updates: Partial<IWeapon>
    ): Promise<IWeapon | null>,
    // deleteWeapon(id: ID): Promise<boolean>
}