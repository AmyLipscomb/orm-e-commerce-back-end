// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
 Category.belongsTo(Product, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
  });
// Categories have many Products
  Product.hasMany(Category, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
  });


// Products belongToMany Tags (through ProductTag)
  Product.belongsToMany(Tag, {through: ProductTag});


  //Not sure about the code below:
    // Product.belongsToMany(Tag, {through: {
    //   model: ProductTag,
    //   unique: false
    // },
    //   //define an alias for when data is retrieved 
    //   as: 'product_tag'
    //   });
      
    // foreignKey: 'product_tag_id',
      // onDelete: 'CASCADE',


      
  
// Tags belongToMany Products (through ProductTag)
  Tag.belongsToMany(Product, {through: ProductTag});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
