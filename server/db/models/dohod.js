'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dohod extends Model {
    static associate({ Street, GameStatistic }) {
      this.belongsTo(Street, {
        foreignKey: 'streetid',
      });
      this.belongsToMany(GameStatistic, {
        through: 'Estates',
        foreignKey: 'dohodid',
      });
    }
  }
  Dohod.init(
    {
      streetid: DataTypes.INTEGER,

      value: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Dohod',
    }
  );
  return Dohod;
};
