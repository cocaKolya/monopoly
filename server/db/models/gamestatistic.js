'use strict';
const { Model, useInflection } = require('sequelize');
const useringame = require('./useringame');
module.exports = (sequelize, DataTypes) => {
  class GameStatistic extends Model {
    static associate({ UserInGame, Street, Dohod }) {
      this.belongsTo(UserInGame, {
        foreignKey: 'uigid',
      });
      this.belongsToMany(Street, {
        through: 'Estates',
        foreignKey: 'gamestatisticid',
      });
      this.belongsToMany(Dohod, {
        through: 'Estates',
        foreignKey: 'gamestatisticid',
      });
    }
  }
  GameStatistic.init(
    {
      uigid: DataTypes.INTEGER,
      money: DataTypes.INTEGER,
      position: DataTypes.INTEGER,
      queue: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'GameStatistic',
    }
  );
  return GameStatistic;
};
