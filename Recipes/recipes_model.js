const db = require('../data/db-config');

function getAllRecipes(){
    return db('recipes')
    .from('recipes')
};

function findRecipeById(id){
    return db('recipes')
    .from('recipes')
    .where('recipe_id', id)
};

function getRecipesByUserId(id){
    return db('recipes')
    .from('recipes')
    .where('userId', id)
};

function addRecipeByUserId(id, recipe){
    return db('recipes')
    .from('recipes')
    .where('userId', id)
    .insert(recipe)
    .returning('recipe_id')
};

function updateRecipeById(id, changes){
    return db('recipes')
    .where('recipe_id', id)
    .update(changes)
    .returning('recipe_id')
};

function deleteRecipeById(id){
    return db('recipes')
    .where('recipe_id', id)
    .del()
};


module.exports ={
    getAllRecipes,
    findRecipeById, 
    getRecipesByUserId,
    addRecipeByUserId,
    updateRecipeById,
    deleteRecipeById,
}