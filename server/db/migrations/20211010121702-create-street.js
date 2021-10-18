'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Streets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      special: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      corner: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      cost: {
        type: Sequelize.INTEGER,
      },
      boardid: {
        type: Sequelize.INTEGER,
      },
      color: {

        type: Sequelize.STRING,
      },
      maxlevel: {

        type: Sequelize.INTEGER,
      },
      full: {

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
    await queryInterface.dropTable('Streets');
  },
};
