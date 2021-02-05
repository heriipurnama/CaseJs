"use strict";

const bcrypt = require("bcrypt");

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      photo: DataTypes.STRING,
      role: DataTypes.STRING
    },
    {
      hooks: {
        beforeValidate: (instance) => {
          instance.first_name = instance.first_name.toLowerCase();
        },
        beforeValidate: (instance) => {
          instance.last_name = instance.last_name;
        },
        beforeValidate: (instance) => {
          instance.email = instance.email.toLowerCase();
        },
        beforeValidate: (instance) => {
          instance.password = bcrypt.hashSync(instance.password, 10);
        },
      },
      sequelize,
      modelName: "user",
      underscored: true,
    }
  );

  Object.defineProperty(user.prototype, "entity", {
    get() {
      return {
        id: this.id,
        firstName: this.first_name,
        lastName: this.last_name,
        email: this.email,
        photo: this.photo,
        role: this.role
      };
    },
  });
  return user;
};
