const express = require('express');
const router = express.Router();
const recipeModel = require('../Recipes/recipes_model');

const db = require('./ingredient-model');

// Get ingredients by recipe Id
router.get('/recipe/:id', (req,res) =>{
    const {id} = req.params;

    recipeModel.findRecipeById(id)
    .then(recipe =>{
        if(recipe.length > 0){
            db.getIngredientsByRecipeId(id)
                .then(ingredients =>{
                    if(ingredients.length > 0){
                        res.status(200).json(ingredients)
                    }else{
                        res.status(404).json({message:'No ingredients listed for that recipe'})
                    }
                })
                .catch(error =>{
                    res.status(500).json({errorMessage:'Failed to get ingredients for recipe'})
                })
        }else{
            res.status(404).json({message:'Unable to find recipe with that ID'})
        }
    })
    .catch(error =>{
        res.status(500).json({errorMessage:'Failed to get recipe with Id'})
    })

});

// Get ingredient by Id
router.get('/:id', (req,res) =>{
    const {id} = req.params;

    db.findIngredientById(id)
    .then(ingredient =>{
        if(ingredient.length > 0){
            console.log(ingredient)
            res.status(200).json(ingredient)
        }else{
            res.status(404).json({message:'Unable to find ingredient with that Id'})
        }
    })
    .catch(error =>{
        res.status(500).json({errorMessage:'Failed to get ingredient by ID'})
    })
});

// add ingredient to recipe by Id
// router.post('/recipe/:id', (req,res) =>{
//     const {id} = id;

//     recipeModel.findRecipeById(id)
//     .then(recipe =>{

//     })
//     .catch(error =>{
//         res.status(500).json({errorMessage:'Failed to find recipe with that Id'})
//     })
// });

module.exports = router;