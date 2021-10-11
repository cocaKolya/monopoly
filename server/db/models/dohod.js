'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dohod extends Model {
    static associate({ Street }) {
      this.hasOne(Street, {
        foreignKey: 'streetid',
      });
    }
  }
  Dohod.init(
    {
      streetid: DataTypes.INTEGER,
      level: DataTypes.INTEGER,
      value: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Dohod',
    }
  );
  return Dohod;
};
