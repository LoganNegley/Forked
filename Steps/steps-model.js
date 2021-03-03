const db = require('../data/db-config');

//Get all steps
function getAllSteps(){
    return db('steps')
    .from('steps')
    .orderBy('recipeId')
};

//Get by step id
function getStepById(id){
    return db('steps')
    .where('stepId', id)
};

// Get all steps by recipe Id
function getStepsByRecipeId(id){
    return db('steps')
    .from('steps')
    .where('recipeId', id)
    .orderBy('step_number')
};

// Add step to recipe by Id
function addStepToRecipeById(step){
    return db('steps')
    .insert(step)
};

// Delete step by Id

// Update step by id

module.exports = {
getAllSteps,
getStepById,
getStepsByRecipeId,
addStepToRecipeById
};