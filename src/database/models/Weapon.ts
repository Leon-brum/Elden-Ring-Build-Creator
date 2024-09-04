import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class Weapon extends Model<InferAttributes<Weapon>, InferCreationAttributes<Weapon>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare type: string;
  declare forgingStone: string;
  declare damage: object;
  declare defense: object;
  declare requirements: object;
  declare scaling: object;
  declare weight: number;
  declare passive: boolean;
}

Weapon.init({
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER.UNSIGNED,
  },
  name: { allowNull: false, type: DataTypes.STRING(255) },
  type: { allowNull: false, type: DataTypes.STRING(50) },
  forgingStone: {
    allowNull: false,
    field: 'forging_stone',
    type: DataTypes.ENUM('standard', 'somber'),
  },
  damage: { allowNull: false, type: DataTypes.JSON },
  defense: { allowNull: false, type: DataTypes.JSON },
  requirements: { allowNull: false, type: DataTypes.JSON },
  scaling: { allowNull: false, type: DataTypes.JSON },
  weight: { allowNull: false, type: DataTypes.DECIMAL(5, 2) },
  passive: { allowNull: false, type: DataTypes.BOOLEAN },
}, {
  sequelize: db,
  underscored: true,
  modelName: 'weapon',
  timestamps: false,
});

export default Weapon;