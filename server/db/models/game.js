'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'owner' });
      this.belongsToMany(User, {
        through: 'UserGamePandings',
        foreignKey: 'gamekey',
        as: 'UserGamePandingsAliase',
      });
      this.belongsToMany(User, {
        through: 'UserInGames',
        foreignKey: 'gameid',
        as: 'UserInGamesAliase',
      });
    }
  }
  Game.init(
    {
      key: DataTypes.TEXT,
      owner: DataTypes.INTEGER,
      inprocess: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Game',
    }
  );
  return Game;
};
