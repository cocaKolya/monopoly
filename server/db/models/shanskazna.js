'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShansKazna extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ShansKazna.init({
    title: DataTypes.TEXT,
    text: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'ShansKazna',
  });
  return ShansKazna;
};