const express = require('express');
const router = express.Router();
const validateRecipe = require('../middleware/validateRecipeId');

const db = require('./steps-model');

router.get('/', (req,res) =>{
    db.getAllSteps()
    .then(steps =>{
        res.status(200).json(steps)
    })
    .catch(error =>{
        console.log(error)
        res.status(500).json({errorMessage:'Failed to get all steps'})
    })
});

router.get('/:id', (req,res) =>{
    const {id} = req.params;

    db.getStepById(id)
    .then(step =>{
        if(step.length > 0){
            res.status(200).json(step)
        }else{
            res.status(404).json({message:'Step with that Id does not exist'})
        }
    })
    .catch(error =>{
        console.log(error)
        res.status(500).json({errorMessage:'Failed to find step by ID'})
    })
});

// get steps for recipe by recipe ID
router.get('/recipe/:id', validateRecipe, (req,res) =>{
    const {id} = req.params;
    const {recipe_id}  = req.body[0];

    db.getStepsByRecipeId(recipe_id)
    .then(steps =>{
        res.status(200).json(steps)
    })
    .catch(error =>{
        console.log(error)
        res.status(500).json({errorMessage:'Failed to get steps for recipe with that Id'})
    })
});
module.exports = router;