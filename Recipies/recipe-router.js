const express = require('express');

const recipeBook = require('./recipe-model');

const router = express.Router();

router.get('/', (req,res) =>{
    recipeBook.findRecipes()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipes' });
    });
})
router.get('/:id/ingredients', (req, res) =>{
    const id = req.params.id;
    recipeBook.findIngredientsList(id)
    .then(ingredients =>{
        res.json(ingredients);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get ingredients' });
      });
})
router.get('/:id/steps', (req, res) =>{
    const id = req.params.id;
    recipeBook.findInstructions(id)
    .then(steps =>{
        res.json(steps);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get steps' });
      });
})
module.exports = router;