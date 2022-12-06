// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    // * `id`
    id:{
      // * Integer.
      type: DataTypes.INTEGER,

      // * Doesn't allow null values.
      allowNull: false,

      // * Set as primary key.
      primaryKey: true,

      // * Uses auto increment.
        autoIncrement: true,
    },
  

  // * `product_name`
  product_name: {
      // * String.
      type: DataTypes.STRING,
  
      // * Doesn't allow null values.
      allowNull: false,
  },

  // * `price`
  price: {
     // * Decimal.
      type: DataTypes.STRING,
      
    // * Doesn't allow null values.
      allowNull: false,
    // * Validates that the value is a decimal.
      validate: {
        isDecimal: true,
      }
  },
  
  // * `stock`
  stock: {
     // * Integer.
      type: DataTypes.INTEGER,

     // * Doesn't allow null values.
      allowNull: false,

    // * Set a default value of `10` & Validates that the value is numeric.
      validate: {
        len: [10], // setting the default length as 10
        isNumeric: true, // validates that the number is numeric
      }
  },
  
  // * `category_id`
  category_id: {
     // * Integer.
     type: DataTypes.INTEGER,

    // * References the `Category` model's `id`.
    references: {
      model: 'category',
      key: 'id',
    },
  },
  
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
