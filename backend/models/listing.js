'use strict';
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Listing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Listing.init({
    title: DataTypes.STRING,
    price: DataTypes.FLOAT,
    location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Listing',
  });
  return Listing;
};