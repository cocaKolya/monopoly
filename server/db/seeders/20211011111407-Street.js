'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Streets',
      [
        {
          name: 'John Doe',
          isBetaMember: false,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {},
};
