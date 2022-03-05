"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      post.belongsTo(models.user);
    }
  }
  post.init(
    {
      title: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Title Required!",
          },
        },
      },
      body: {
        type: DataTypes.TEXT,
        validate: {
          notEmpty: {
            message: "Please fill what happen now!",
          },
          len: [1, 5000],
        },
      },
      image: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "User ID Required!",
          },
          isNumeric: {
            message: "Numeric Required!",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "post",
    },
  );
  return post;
};
