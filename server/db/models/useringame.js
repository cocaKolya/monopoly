'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserInGame extends Model {
    static associate({ GameStatistic }) {
      this.hasOne(GameStatistic, { foreignKey: 'uigid' });
    }
  }
  UserInGame.init(
    {
      userid: DataTypes.INTEGER,
      gameid: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'UserInGame',
    }
  );
  return UserInGame;
};
