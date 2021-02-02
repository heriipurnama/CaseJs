'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // one to many
      // author.hasMany(models.book, {
      //   foreignKey: 'author_id'
      // }),
      // author.belongsToMany(models.book, {
      //   foreignKey: 'author_id'
      // })

      author.hasMany(models.book, {
        foreignKey: {
          name: "author_id",
        },
        as: "books",
      });

      author.belongsToMany(models.publisher, {
        through: "book",
        foreignKey: {
          name: "author_id",
        }, as : "publishers"
      });

    }
  };
  author.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    photo: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'author',
    underscored: true,
  });
  return author;
};