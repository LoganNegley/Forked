const express = require('express');
const router = express.Router();
const validateRecipe = require('../middleware/validateRecipeId');
const recipeModel = require('../Recipes/recipes_model');

const db = require('./steps-model');

// Get all steps
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


// Get step by Id
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

// Add step to recipe by recipe ID
router.post('/recipe/:id', (req,res) =>{
    const {id} = req.params;
    const step = req.body;
    const newStep = {...step, recipeId:id}

    console.log(newStep)

    if(!newStep.instruction || !newStep.step_number){
        res.status(400).json({message:'Must fill all fields to add step'})
    }else{
        recipeModel.findRecipeById(id)
        .then(recipe =>{
            if(recipe.length > 0){
                db.addStepToRecipeById(newStep)
                .then(info =>{
                    res.status(201).json(info)
                })
                .catch(error =>{
                    console.log(error);
                    res.status(500).json({errorMessage:'Failed to add new step to recipe'})
                })
            }else{
                res.status(500).json({message:'Recipe does not exist with that Id'})
            }
        })
        .catch(error =>{
            console.log(error)
            res.status(500).json({errorMessage:'Failed to get recipe with Id'})
        })
    }
});


module.exports = router;