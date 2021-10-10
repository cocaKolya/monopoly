'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Street extends Model {
    static associate({ Game, User, Dohod }) {
      this.belongsToMany(User, {
        through: 'UserStreets',
        foreignKey: 'streetid',
      });
      this.belongsToMany(Game, {
        through: 'UserStreets',
        foreignKey: 'streetid',
      });
      this.hasOne(Dohod, {
        foreignKey: 'streetid',
      });
    }
  }
  Street.init(
    {
      name: DataTypes.STRING,
      value: DataTypes.INTEGER,
      color: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Street',
    }
  );
  return Street;
};
