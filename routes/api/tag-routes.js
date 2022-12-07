const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try {
    const tagData = await Tag.findAll();
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);

  }
  // be sure to include its associated Products - HELP!
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    const tagData = await Tag.findbyPk(req.params.id, {
      //NOT SURE ABOUT THE CODE THAT GOES HERE 
      //include: 
    });
    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!'});
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);

  }
  //NEED HELP HERE
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// NOT SURE ABOUT THIS ONE 
router.put('/:id', async (req, res) => {
  try {
    await tagData.update(req.body, {
       // update a tag's name by its `id` value
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
    const tagData = await Tag.destroy({
    // delete on tag by its `id` value
    where: {
      id: req.params.id
    }
    });
    if (!tagData){
      res.status(404).json({ message: 'No tag found with this id!'});
      return;
    };
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
  
});

module.exports = router;
