'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('talismans', {
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
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('talismans');
  }
};
