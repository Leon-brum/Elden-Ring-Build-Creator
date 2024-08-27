import { Sequelize } from 'sequelize-typescript';
import { User } from './models/User';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'your_username',
  password: 'your_password',
  database: 'elden_ring_build',
  models: [User], // Aqui você irá adicionar todos os modelos que criar
});

export default sequelize;
