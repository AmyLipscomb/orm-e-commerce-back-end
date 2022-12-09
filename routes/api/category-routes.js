const router = require('express').Router();
const { Category, Product, Tag } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const categoriesData = await Category.findAll({
       // be sure to include its associated Products 
       include: [{model: Product}]
    });

    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
  
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const categoriesData = await Category.findByPk(req.params.id, {
      // be sure to include its associated Products 
      include: [{model: Product}]

    });
    if (!categoriesData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    
    return res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }

});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoriesData = await Category.create(req.body);
    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.put('/:id', async (req, res) => {
  try{
     const categoriesData = await Category.update(req.body, {
        // update a category by its `id` value
        where: {
          id: req.params.id,
        },
      })
      res.status(200).json(categoriesData);
    } catch (err) {
      res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
  try {
    const categoriesData = await Category.destroy({

      // delete a category by its `id` value
      where: {
        id: req.params.id
      }
    });
    if (!categoriesData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    };
    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
