// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
  Product.belongsTo(Category, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
  });
// Categories have many Products
  Category.hasMany(Product, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
  });


// Products belongToMany Tags (through ProductTag)
  // Product.belongsToMany(Tag, {through: ProductTag});

  // https://www.bezkoder.com/sequelize-associate-many-to-many/

  Product.belongsToMany(Tag, {
    through: ProductTag,
    // as: "tags",
    foreignKey: "product_id",
  });

  Tag.belongsToMany(Product, {
    through: ProductTag,
    // as: "products",
    foreignKey: "tag_id"
  })
      


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};







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