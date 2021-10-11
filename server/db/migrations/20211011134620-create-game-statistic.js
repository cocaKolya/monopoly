'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('GameStatistics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      uigid: {
        type: Sequelize.INTEGER,
        references: {
          model: 'UserInGames',
          key: 'id',
        },
      },
      money: {
        type: Sequelize.INTEGER,
      },
      position: {
        type: Sequelize.INTEGER,
      },
      queue: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('GameStatistics');
  },
};
