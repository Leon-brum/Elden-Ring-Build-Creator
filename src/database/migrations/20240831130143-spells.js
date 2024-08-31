'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('spells', {
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
      description: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      fp_cost: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      // Requerimentos de atributos
      ...['intelligence', 'faith', 'arcane'].reduce((acc, attr) => ({
        ...acc,
        [`required_${attr}`]: { allowNull: false, type: Sequelize.INTEGER },
      }), {}),
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('spells');
  },
};