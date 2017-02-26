'use strict';
module.exports = function(sequelize, DataTypes) {
  var Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    info: DataTypes.TEXT,
    price: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Products;
};