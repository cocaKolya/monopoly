'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Estate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Estate.init({
    streetid: DataTypes.INTEGER,
    gamestatisticid: DataTypes.INTEGER,
    dohodid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Estate',
  });
  return Estate;
};