const db = require('../data/db-config');

//Get all steps
function getAllSteps(){
    return db('steps')
    .from('steps')
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
};

module.exports = {
getAllSteps,
getStepById,
getStepsByRecipeId
};