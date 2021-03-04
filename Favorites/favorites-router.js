const express = require('express');
const router = express.Router();
const validateUserId = require('../middleware/validateUserId');
const validateRecipeId = require('../middleware/validateRecipeId');

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
router.get('/:id', (req,res) =>{
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
router.post('/user/:id/recipe/:recipeId',validateUserId, validateRecipeId, (req,res) =>{
    const {id} = req.params;
    const {recipeId} = req.params;
    const newFavorite = {userId:id, dateAdded:Date.now(), recipeId:recipeId};

    db.addFavorite(newFavorite)
    .then(added =>{
        res.status(201).json(added)
    })
    .catch(error =>{
        console.log(error)
        res.status(500).json({errorMessage:'Failed to add favorite recipe'})
    })
});

// Delete favorite by Id
router.delete('/:id', (req,res) =>{
    const {id} = req.params;

    db.getFavoriteById(id)
    .then(recipe =>{
        if(recipe.length > 0){
        db.deleteFavoriteByRecipeId(id)
        .then(deleted =>{
            res.status(200).json({deleted:deleted})
        })
        .catch(error =>{
            res.status(500).json({errorMessage:'Failed to delete favorite recipe'})
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