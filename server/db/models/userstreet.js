'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserStreet extends Model {

    static associate(models) {
      // define association here
    }
  };
  UserStreet.init({
    userid: DataTypes.INTEGER,
    gameid: DataTypes.INTEGER,
    streetid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserStreet',
  });
  return UserStreet;
};
