const express = require('express');
const router = express.Router();
const recipeModel = require('../Recipes/recipes_model');
const validateRecipe = require('../middleware/validateRecipeId');

const db = require('./ingredient-model');

// Get ingredients by recipe Id
router.get('/recipe/:recipeId', validateRecipe, (req,res) =>{
    const {recipeId} = req.params;

    recipeModel.findRecipeById(recipeId)
    .then(recipe =>{

        db.getIngredientsByRecipeId(recipeId)
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
router.post('/recipe/:id', (req,res) =>{
    const {id} = req.params;
    const recipeId = parseInt(id)
    const newIng = req.body;

    recipeModel.findRecipeById(id) //validate recipe exists
    .then(recipe =>{
        if(recipe.length > 0){

            if(!newIng.ingredient_name || !newIng.quantity){
                res.status(404).json({message:'Must fill out all fields'})
        } else{
            db.addIngredient(newIng) //add ingredient to database
            .then(ing =>{
                db.addIngredientToRecipe(ing, recipeId) // adding data to reference table
                .then(item =>{
                    res.status(201).json({created:item})
                })
                .catch(error =>{
                    console.log(error)
                    res.status(500).json({errorMessage:'Failed to add ingredient to recipe'})
                })
            })
            .catch(error =>{
                console.log(error)
                res.status(500).json({errorMessage:'Failed to add ingredient'})
            })
        }
            } else{
                res.status(404).json({message:'Unable to find recipe with that Id'})
            }
    })

    .catch(error =>{
        res.status(500).json({errorMessage:'Failed to get recipe by Id'})
    })
});

//Delete ingredient by ID
router.delete('/:id', (req,res) =>{
    const {id} = req.params;

    db.deleteIngredientById(id)
    .then(deleted =>{
        res.status(200).json({Removed: deleted})
    })
    .catch(error =>{
        res.status(500).json({errorMessage:'Failed to delete ingredient'})
    })
});

//Update ingredient by ID
router.put('/:id', (req,res) =>{
    const {id} = req.params;
    const changes = req.body;

    db.findIngredientById(id)
    .then(item =>{
        db.updateIngredient(id, changes)
        .then(change =>{
            res.status(200).json({Update:change})
        })
        .catch(error =>{
            res.status(500).json({errorMessage:'Failed to update ingredient'})
        })
    })
    .catch(error =>{
        res.status(500).json({errorMessage:'Failed to get ingredient by Id'})
    })
});

module.exports = router;