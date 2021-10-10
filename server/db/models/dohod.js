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
      onecard: DataTypes.INTEGER,
      threecard: DataTypes.INTEGER,
      onehouse: DataTypes.INTEGER,
      twohouse: DataTypes.INTEGER,
      threehouse: DataTypes.INTEGER,
      fourhouse: DataTypes.INTEGER,
      hotel: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Dohod',
    }
  );
  return Dohod;
};
