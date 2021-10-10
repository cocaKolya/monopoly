'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Dohods', {
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
      onecard: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      threecard: {
        type: Sequelize.INTEGER,
      },
      onehouse: {
        type: Sequelize.INTEGER,
      },
      twohouse: {
        type: Sequelize.INTEGER,
      },
      threehouse: {
        type: Sequelize.INTEGER,
      },
      fourhouse: {
        type: Sequelize.INTEGER,
      },
      hotel: {
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
    await queryInterface.dropTable('Dohods');
  },
};
