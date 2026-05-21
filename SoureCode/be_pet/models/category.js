"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {

    static associate(models) {
      this.hasMany(models.Product);
    }
  }
  Category.init(
    {
      name: DataTypes.STRING,
      avatar: DataTypes.STRING(500),
      description: DataTypes.STRING(500),
      status: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
