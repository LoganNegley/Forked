const express = require('express');
const router = express.Router();
const validateUserId = require('../middleware/validateUserId');

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

// get users recipes
router.get('/user/:id', (req,res) =>{
    const {id} = req.params;

    db.getRecipesByUserId(id)
    .then(recipes =>{
        if(recipes.length > 0){
            res.status(200).json(recipes)
        }else{
            res.status(404).json(({message:'No user with that ID'}))
        }
    })
    .catch(err =>{
        res.status(500).json({errorMessage:'Unable to get recipes for that user'})
    })
});

//Add recipe to user records
router.post('/user/:id', validateUserId, (req, res) =>{
    const {id} = req.params;
    const recipe = req.body;
    const newRecipe ={...recipe, userId:id}


    if(!newRecipe.recipeName || !newRecipe.prep_time || !newRecipe.cook_time){
        res.status(404).json({message:"Make sure all fields are filled out"})
    }else{
        db.addRecipeByUserId(id, newRecipe)
        .then(recipe =>{
            res.status(201).json(recipe)
        })
        .catch(error =>{
            console.log(error)
            res.status(500).json({errorMessage:"Unable to add new recipe"})
        })
    }



});


module.exports = router;