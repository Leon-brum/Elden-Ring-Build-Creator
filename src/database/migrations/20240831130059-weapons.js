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
      forgingStone: {
        allowNull: false,
        field: 'forging_stone',
        type: Sequelize.ENUM('standard', 'somber'),
      },
      weight: {
        allowNull: false,
        type: Sequelize.DECIMAL(5, 2),
      },
      passive: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      damage: {
        allowNull: false,
        type: Sequelize.JSON,
      },
      defense: {
        allowNull: false,
        type: Sequelize.JSON,
      },
      requirements: {
        allowNull: false,
        type: Sequelize.JSON,
      },
      scaling: {
        allowNull: false,
        type: Sequelize.JSON,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('weapons');
  },
};