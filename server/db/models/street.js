'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Street extends Model {
    static associate({ Dohod, GameStatistic }) {
      this.hasMany(Dohod, {
        foreignKey: 'streetid',
      });
      this.belongsToMany(GameStatistic, {
        through: 'Estates',
        foreignKey: 'streetid',
      });
    }
  }
  Street.init(
    {
      name: DataTypes.STRING,
      cost: DataTypes.INTEGER,
      color: DataTypes.STRING,
      maxlevel: DataTypes.INTEGER,
      full: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Street',
    }
  );
  return Street;
};
