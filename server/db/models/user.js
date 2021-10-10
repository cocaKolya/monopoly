'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Game, Street }) {
      this.hasMany(Game, { foreignKey: 'owner' });
      this.belongsToMany(Game, {
        through: 'UserGamePandings',
        foreignKey: 'userid',
      });
      this.belongsToMany(Game, {
        through: 'UserInGames',
        foreignKey: 'userid',
      });
      this.belongsToMany(Game, {
        through: 'UserStreets',
        foreignKey: 'userid',
      });
      this.belongsToMany(Street, {
        through: 'UserStreets',
        foreignKey: 'userid',
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
