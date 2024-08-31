'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('armor_pieces', {
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
      part: {
        allowNull: false,
        type: Sequelize.STRING, // Ex: Head, Chest, Arms, Legs
      },
      weight: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      // tipos de defesa
      ...['physical', 'magic', 'fire', 'lightning', 'holy'].reduce((acc, type) => ({
        ...acc,
        [`${type}_defense`]: { allowNull: false, type: Sequelize.INTEGER },
      }), {}),
      // resistências
      ...['immunity', 'robustness', 'focus', 'vitality', 'poise'].reduce((acc, resistance) => ({
        ...acc,
        [`${resistance}`]: { allowNull: false, type: Sequelize.INTEGER },
      }), {}),
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('armor_pieces');
  },
};
