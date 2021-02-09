const express = require('express');
const router = express.Router();

const db = require('./recipes_model');

// get ALL recipes
router.get('/', (req,res) =>{
    db.getAllRecipes()
    .then(recipes =>{
        res.status(200).json(recipes)
    })
    .catch(error =>{
        res.status(500).json({errorMessage:'Unable to get recipes'})
    })
});

// find recipe by ID
router.get('/:id', (req,res) =>{
    const {id} = req.params;

    db.findRecipeById(id)
    .then(recipe =>{
        if(recipe.length > 0){
            res.status(200).json(recipe)
        }else{
            res.status(404).json({errorMessage:'Unable to find recipe with that ID'})
        }
    })
    .catch(err =>{
        res.status(500).json({message:'Failed to get recipe with that ID'})
    })
});

module.exports = router;