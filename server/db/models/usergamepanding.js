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
    gameid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserGamePanding',
  });
  return UserGamePanding;
};
