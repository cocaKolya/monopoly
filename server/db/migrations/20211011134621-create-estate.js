'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Estates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      streetid: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Streets',
          key: 'id',
        },
      },
      gamestatisticid: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'GameStatistics',
          key: 'id',
        },
      },
      dohodid: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Dohods',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Estates');
  },
};
