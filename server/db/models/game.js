'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    static associate({ User, Street }) {
      this.belongsTo(User, { foreignKey: 'owner' });
      this.belongsToMany(User, {
        through: 'UserGamePandings',
        foreignKey: 'gameid',
      });
      this.belongsToMany(User, {
        through: 'UserInGames',
        foreignKey: 'gameid',
      });
      this.belongsToMany(User, {
        through: 'UserStreets',
        foreignKey: 'gameid',
      });
      this.belongsToMany(Street, {
        through: 'UserStreets',
        foreignKey: 'gameid',
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
