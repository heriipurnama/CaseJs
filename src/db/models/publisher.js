'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class publisher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
       publisher.hasMany(models.book, {
        foreignKey: {
          name: "publisher_id",
        }
      });

      publisher.belongsToMany(models.author, {
        through: "book",
        foreignKey: {
          name: "publisher_id",
        }, as : "authors"
      });
    }
    
  };
  publisher.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    website: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'publisher',
    underscored: true,
  });
  return publisher;
};