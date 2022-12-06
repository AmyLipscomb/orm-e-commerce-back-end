const router = require('express').Router();
const { Category, Product, Tag } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const categoriesData = await Category.findAll();
    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Products - HELP!
  // include: [{model: Category, through: Product}]
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const categoriesData = await Category.findbyPk(req.params.id, {
      //NOT SURE ABOUT THE CODE THAT GOES HERE 
      //include: 
    });
    if (!categoriesData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }

  //NEED HELP HERE
  // be sure to include its associated Products 
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

// NOT SURE ABOUT THIS ONE 
router.put('/:id', async (req, res) => {
  try{
      await Category.update(req.body, {
        // update a category by its `id` value
        where: {
          id: req.params.id,
        },
      })
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
