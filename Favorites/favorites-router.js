const express = require('express');
const router = express.Router();
const validateUserId = require('../middleware/validateUserId');
const validateRecipeId = require('../middleware/validateRecipeId');
const recipeModel = require('../Recipes/recipes_model');

const db = require('./favorites-model');

// Get all favorite recipes
router.get('/', (req,res) =>{
    db.getAllFavorites()
    .then(favorites =>{
        res.status(200).json(favorites)
    })
    .catch(error =>{
        console.log(error)
        res.status(500).json({errorMessage:'Failed to get all favorite recipes'})
    })
});

// Get favorite by recipe Id
router.get('/recipe/:id', (req,res) =>{
    const {id} = req.params;

    db.getFavoriteById(id)
    .then(recipe =>{
        if(recipe.length > 0){
            res.status(200).json(recipe)
        }else{
            res.status(404).json({message:'Favorite recipe with that Id does not exist'})
        }
    })
    .catch(error =>{
        res.status(500).json({errorMessage:'Failed to get favorite recipe with Id'})
    })
});

// Get favorite recipes by user Id
router.get('/user/:id', validateUserId, (req,res) =>{
    const {id} = req.params;

    db.getFavoritesByUserId(id)
    .then(favorites =>{
        if(favorites.length > 0){
            res.status(200).json(favorites)
        }else{
            res.status(404).json({message:'User with Id has no favorite recipes'})
        }
    })
    .catch(error =>{
        console.log(error)
        res.status(500).json({errorMessage:'Failed to get all favorite recipes'})
    })
});

// Add favorite recipe
// router.post('/user/:id/recipe/:recipeId',validateUserId, validateRecipeId, (req,res) =>{
//     const {id} = req.params;
//     const {recipeId} = req.params;
//     const newFavorite = {userId:id, recipeId:recipeId};

//     db.addFavorite(newFavorite)
//     .then(added =>{
//         res.status(201).json(added)
//     })
//     .catch(error =>{
//         console.log(error)
//         res.status(500).json({errorMessage:'Failed to add favorite recipe'})
//     })
// });

// Add favorite recipe
router.post('/user/:id/recipe/:recipeId',validateUserId, validateRecipeId, (req,res) =>{
    const {id} = req.params;
    const {recipeId} = req.params;
    const newFavorite = {userId:id, recipeId:recipeId};

    // db.addFavorite(newFavorite)
    // .then(added =>{
    //     res.status(201).json(added)
    // })
    // .catch(error =>{
    //     console.log(error)
    //     res.status(500).json({errorMessage:'Failed to add favorite recipe'})
    // })

    recipeModel.findRecipeById(recipeId) //find the recipe with ID 
    .then(item =>{
        if(item.length > 0){
            const recipe = item[0] //If recipe set it to recipe
            
            if(recipe.isFavorite === 0){ //if recipe is not a favorite then update isFavorite Key of recipe
                db.updateIsFavorite(recipe.recipe_id, true)
                .then(update =>{

                    db.addFavorite(recipe) //adding recipe info to favorites table
                    .then(record =>{
                        res.status(200).json(record)
                    })
                    .catch(error =>{
                        res.status(500).json({errorMessage:'Failed to add info to favorites'})
                    })
                })
                .catch(error =>{
                    res.status(500).json({errorMessage: 'Failed to update recipe to favorits'})
                })
            } else{
                res.status(400).json({message:'Recipe with that ID is currently a favorite'})    //return message if recipe is already a favorite
            }
        }else{
            res.status(404).json({message:'Unable to find recipe with that ID'}) //recipe does not exist with that ID
        }
    })
    .catch(error =>{
        res.status(500).json({errorMessage:'Failed to get recipe with ID'})
    })

});

// Delete favorite by recipe Id
router.delete('/recipe/:id', (req,res) =>{
    const {id} = req.params;

    db.getFavoriteById(id)
    .then(recipe =>{
        if(recipe.length > 0){
            db.updateIsFavorite(id, false)
            .then(item =>{
                db.deleteFavoriteByRecipeId(id)
                .then(deleted =>{
                    res.status(200).json({deleted:deleted})
                })
                .catch(error =>{
                    res.status(500).json({errorMessage:'Failed to delete favorite recipe'})
                })
            })
            .catch(error =>{
                res.status(500).json({errorMessage:'Failed to update recipe'})
            })
        
        }else{
            res.status(404).json({message:'Favorite recipe with that Id is not found'})
        }
    })
    .catch(error =>{
        res.status(500).json({errorMessage:'Failed to get favorite recipe with ID'})
    })
});

module.exports = router;