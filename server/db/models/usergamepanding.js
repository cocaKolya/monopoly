'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserGamePanding extends Model {

    static associate() {

    }
  };
  UserGamePanding.init({
    userid: DataTypes.INTEGER,
    frendid: DataTypes.INTEGER,
    gamekey: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'UserGamePanding',
  });
  return UserGamePanding;
};
