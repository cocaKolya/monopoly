'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Game }) {
      this.hasMany(Game, { foreignKey: 'owner' });
      this.belongsToMany(Game, {
        through: 'UserGamePandings',
        foreignKey: 'userid',
        as: 'UserGamePandingsAliase',
      });
      // this.belongsToMany(Game, {
      //   through: 'UserGamePandings',
      //   foreignKey: 'frendid',
      //   as: 'friendUserGamePandingsAliase',
      // });
      this.belongsToMany(Game, {
        through: 'UserInGames',
        foreignKey: 'userid',
        as: 'UserInGamesAliase',
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      urlFoto: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
