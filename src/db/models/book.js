'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      book.belongsTo(models.author, {
        foreignKey: 'author_id'
      }),
      book.belongsTo(models.publisher, {
        foreignKey: 'publisher_id'
      })
    }

  };
  book.init({
    author_id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model : 'author',
        key: 'id'
      }
    },
    publisher_id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'publisher',
        key: 'id'
      }
    },
    title: DataTypes.STRING,
    price: DataTypes.STRING,
    year: DataTypes.DATE,
    cover_book: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'book',
    underscored: true,
  });
  return book;
};