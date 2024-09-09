import { QueryInterface } from 'sequelize';
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface: QueryInterface) {
    await queryInterface.bulkInsert('weapons',[
      {
        name: 'Uchigatana',
        type: 'katana',
        forging_stone: 'standard',
        weight: 5.5,
        passive: true,
        damage: JSON.stringify({
          physical: 115,
          magic: 0,
          fire: 0,
          lightning: 0,
          holy: 0,
        }),
        defense: JSON.stringify({
          physical: 45,
          magic: 30,
          fire: 30,
          lightning: 30,
          holy: 30,
        }),
        requirements: JSON.stringify({
          strength: 11,
          dexterity: 15,
          intelligence: 0,
          faith: 0,
          arcane: 0,
        }),
        scaling: JSON.stringify({
          strength: 'D',
          dexterity: 'D',
          intelligence: '-',
          faith: '-',
          arcane: '-',
        }),
      },
      {
        name: 'Dark Moon Greatsword',
        type: 'greatsword',
        forging_stone: 'somber',
        weight: 10.5,
        passive: false,
        damage: JSON.stringify({
          physical: 82,
          magic: 98,
          fire: 0,
          lightning: 0,
          holy: 0,
        }),
        defense: JSON.stringify({
          physical: 60,
          magic: 40,
          fire: 30,
          lightning: 40,
          holy: 40,
        }),
        requirements: JSON.stringify({
          strength: 16,
          dexterity: 11,
          intelligence: 38,
          faith: 0,
          arcane: 0,
        }),
        scaling: JSON.stringify({
          strength: 'D',
          dexterity: 'D',
          intelligence: 'C',
          faith: '-',
          arcane: '-',
        }),
      },
      {
        name: 'Moonveil',
        type: 'katana',
        forging_stone: 'somber',
        weight: 6.5,
        passive: true,
        damage: JSON.stringify({
          physical: 73,
          magic: 87,
          fire: 0,
          lightning: 0,
          holy: 0,
        }),
        defense: JSON.stringify({
          physical: 50,
          magic: 35,
          fire: 25,
          lightning: 25,
          holy: 25,
        }),
        requirements: JSON.stringify({
          strength: 12,
          dexterity: 18,
          intelligence: 23,
          faith: 0,
          arcane: 0,
        }),
        scaling: JSON.stringify({
          strength: 'E',
          dexterity: 'D',
          intelligence: 'C',
          faith: '-',
          arcane: '-',
        }),
      },
    ]);
  },

  async down (queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('weapons', {});
  }
};
