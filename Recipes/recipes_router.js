const express = require('express');
const router = express.Router();
const validateUserId = require('../middleware/validateUserId');
const validateRecipeId = require('../middleware/validateRecipeId');

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
router.get('/:recipeId', validateRecipeId, (req,res) =>{
    const {recipeId} = req.params;

    db.findRecipeById(recipeId)
    .then(recipe =>{
        res.status(200).json(recipe)
    })
    .catch(err =>{
        res.status(500).json({message:'Failed to get recipe with that ID'})
    })

});

// get users recipes
router.get('/user/:id', validateUserId, (req,res) =>{
    const {id} = req.params;

    db.getRecipesByUserId(id)
    .then(recipes =>{
        res.status(200).json(recipes)
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

// Update recipe by ID
router.put('/:id', (req, res) =>{
    const {id} = req.params;
    const change = req.body;

    db.findRecipeById(id)
    .then(recipe =>{
        if(recipe.length > 0){
            db.updateRecipeById(id, change)
            .then(updatedRecipe =>{
                res.status(200).json(updatedRecipe)
            })
            .catch(error =>{
                console.log(error)
                res.status(500).json({errorMessage:"Unable to update recipe"})
            })
        }else{
            res.status(404).json({message:"Could not find recipe with that ID"})
        }
    })
    .catch(error =>{
        console.log(error)
        res.status(500).json({errorMessage:"Failed to update recipe"})
    })
});

router.delete('/:recipeId', validateRecipeId, (req,res) =>{
    const {recipeId} = req.params;

    db.findRecipeById(id)
        .then(recipe =>{
            db.deleteRecipeById(id)
            .then(removed =>{
                res.status(200).json({removed: removed})
            })
            .catch(error =>{
                console.log(error)
                res.status(500).json({errorMessage:'Failed to delete recipe'})
            })
        })
        .catch(error =>{
            console.log(error)
            res.status(500).json({errorMessage:'Failed to find recipe'})
        })
});



module.exports = router;