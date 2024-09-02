import { Identifiable } from "..";

interface Damage {
  physical: number;
  magic: number;
  fire: number;
  lightning: number;
  holy: number;
}

interface Defense {
  physical: number;
  magic: number;
  fire: number;
  lightning: number;
  holy: number;
}

interface Requirements {
  strength: number;
  dexterity: number;
  intelligence: number;
  faith: number;
  arcane: number;
}

interface Scaling {
  strength: string;
  dexterity: string;
  intelligence: string;
  faith: string;
  arcane: string;
}

export default interface Weapon extends Identifiable {
  id: number;
  name: string;
  type: string;
  forgingStone: 'standard' | 'somber';
  damage: Damage;
  defense: Defense;
  requirements: Requirements;
  scaling: Scaling;
  weight: number;
  passive: boolean;
}