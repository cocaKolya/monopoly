'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Street extends Model {
    static associate({ Dohod, GameStatistic }) {
      this.hasOne(Dohod, {
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
      boardid: DataTypes.INTEGER,
      name: DataTypes.STRING,
      color: DataTypes.STRING,
      cost: DataTypes.INTEGER,
      special: DataTypes.STRING,
      corner: DataTypes.BOOLEAN,
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
