'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Dohods', [
      {
        streetid: 1,

        value: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        streetid: 3,

        value: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        streetid: 5,

        value: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        streetid: 6,

        value: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        streetid: 8,

        value: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        streetid: 9,

        value: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        streetid: 11,

        value: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        streetid: 12,

        value: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        streetid: 14,

        value: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        streetid: 15,

        value: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        streetid: 16,

        value: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        streetid: 18,

        value: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        streetid: 19,

        value: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        streetid: 21,

        value: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        streetid: 23,

        value: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        streetid: 24,

        value: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        streetid: 25,

        value: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        streetid: 26,

        value: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        streetid: 27,

        value: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        streetid: 29,

        value: 24,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        streetid: 31,

        value: 26,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        streetid: 32,

        value: 26,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        streetid: 34,

        value: 28,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        streetid: 35,

        value: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        streetid: 37,

        value: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        streetid: 39,
        value: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {},
};
