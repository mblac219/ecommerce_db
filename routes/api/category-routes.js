const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await
    Category.findAll({
      include: [{ model: Product }],
     });
    return res.status(200).json
    (categoryData)
  } catch (error) {
    return res.status(400).json
    (err)  
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await
    Category.findOne(req.params.id, {
      include: [{ model: Product }],
     });
    return res.status(200).json
    (categoryData)
  } catch (error) {
    return res.status(400).json
    (err)  
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await
    Category.create({
      where: {
        category_name: req.body.category_name,
      },
     });
    return res.status(200).json
    (categoryData)
  } catch (error) {
    return res.status(400).json
    (err)  
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await
    Category.update({
      where: {
        id: req.body.id,
      },
     });
    return res.status(200).json
    (categoryData)
  } catch (error) {
    return res.status(400).json
    (err)  
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await
    Category.destroy({
      where: {
        id: req.params.id,
      },
     });
    return res.status(200).json
    (categoryData)
  } catch (error) {
    return res.status(400).json
    (err)  
  }
});


module.exports = router;