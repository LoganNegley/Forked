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
router.get('/recipe/:recipeId', validateRecipe, (req,res) =>{
    const {recipeId} = req.params;
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

// Delete step by step Id
router.delete('/:id', (req,res) =>{
    const {id} = req.params;

    db.getStepById(id)
    .then(step =>{
            db.deleteStepById(id)
            .then(item =>{
                if(item === 1){
                    res.status(200).json({deleted:item})
                }else{
                    res.status(404).json({message:'Unable to find step with that Id'})
                }
            })
            .catch(error =>{
                res.status(500).json({errorMessage:'Failed to delete step by Id'})
            })
    })
    .catch(error =>{
        console.log(error)
        res.status(500).json({errorMessage:'Failed to get step by ID'})
    })
});

// Update step by step Id
router.put('/:id', (req,res) =>{
    const {id} = req.params;
    const changes = req.body;

    db.getStepById(id)
    .then(step =>{
        if(step.length > 0){
            db.updateStepById(id,changes)
            .then(updatedStep =>{
                res.status(200).json({updated:updatedStep})
            })
            .catch(error =>{
                res.status(500).json({errorMessage:'Failed to update step by step ID'})
            })
        }else{
            res.status(404).json({message:'Unable to find step with that ID'})
        }
    })
    .catch(error =>{
        console.log(error)
        res.status(500).json({errorMessage:'Failed to get step by ID'})
    })
});


module.exports = router;