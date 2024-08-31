'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('weapons', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      upgrade_material: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      weight: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      passive_effect: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      // tipos de dano
      ...['physical', 'magic', 'fire', 'lightning', 'holy'].reduce((acc, type) => ({
        ...acc,
        [`${type}_damage`]: { allowNull: false, type: Sequelize.INTEGER },
        [`${type}_defense`]: { allowNull: false, type: Sequelize.INTEGER },
      }), {}),
      // requerimentos e escalonamento
      ...['strength', 'dexterity', 'intelligence', 'faith', 'arcane'].reduce((acc, attr) => ({
        ...acc,
        [`${attr}_requirement`]: { allowNull: false, type: Sequelize.INTEGER },
        [`${attr}_scaling`]: { allowNull: false, type: Sequelize.STRING },
      }), {}),
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('weapons');
  },
};