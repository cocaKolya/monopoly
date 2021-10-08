'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserInGame extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UserInGame.init({
    userid: DataTypes.INTEGER,
    gameid: DataTypes.INTEGER,
    position: DataTypes.INTEGER,
    money: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserInGame',
  });
  return UserInGame;
};