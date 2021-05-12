const express = require('express');
const validateUser = require('../middleware/validateUserId');
const recipeModel = require('../Recipes/recipes_model');

const router = express.Router();
const db = require('./public-recipes-model');

// GET all public recipes
router.get('/', (req,res) =>{
    db.getAllPublicRecipes()
    .then(recipes =>{
        res.status(200).json(recipes)
    })
    .catch(error =>{
        console.log(error)
        res.status(500).json({errorMessage:'Failed to get public recipes'})
    })
});

// GET public recipe by user ID
router.get('/user/:id', validateUser, (req,res) =>{
    const {id} = req.params;

    db.getPublicRecipeByUserId(id)
    .then(recipes =>{
        res.status(200).json(recipes)
    })
    .catch(err =>{
        console.log(err)
        res.status(500).json({errorMessage:'Failed to get users public recipes'})
    })
});

// ADD recipe to public recipes by ID--Update recipe isPublic 
router.put('/:id', (req,res) =>{
    const {id} = req.params;

    recipeModel.findRecipeById(id) //find recipe with Id
    .then(item =>{
        if(item.length > 0){
            const recipe = item[0]

            if(recipe.isPublic === false){ //if recipe is not public run update func
                db.updateIsPublicRecipe(recipe.recipe_id, true)
                .then(update =>{ //Run func to add recipe to public table
                    db.addToPublicRecipe(recipe)
                    .then(record =>{
                        res.status(200).json(record)
                    })
                    .catch(error =>{
                        res.status(500).json({errorMessage:'Failed to add info to public recipe '})
                    })
                })
                .catch(error =>{
                    res.status(500).json({errorMessge:'Failed to update recipe as public'})
                })
            }else{ //response if recipe is public
                res.status(400).json({message:'Recipe with that ID is currently public'})
            }
        }else{ //if no recipe found with ID
            res.status(404).json({message:'Unable to find recipe with that ID'})
        }
    })
    .catch(error =>{
        res.status(500).json({errorMessage:'Failed to get recipe by ID'})
    })

});

// Delete public recipe by Id
router.delete('/:id', (req,res) =>{
    const {id} = req.params;

    recipeModel.findRecipeById(id)
    .then(recipe =>{
        if(recipe.length > 0){
            db.updateIsPublicRecipe(id, false)
            .then(item =>{
                db.deletePublicRecipeById(id)
                .then(deleted =>{ //breaking here
                    res.status(200).json(deleted)
                })
                .catch(error =>{
                    console.log(error)
                    res.status(500).json({errorMessage:'Failed to delete public recipe'})
                })
            })
            .catch(error =>{
                res.status(500).json({errorMessage:'Failed to update recipe' })
            })
        }else{
            res.status(404).json({message:'Unable to find recipe with that Id'})
        }
    })
    .catch(error =>{
        res.status(500).json({errorMessage:'Failed to get recipe by ID'})
    })
});

module.exports = router;
