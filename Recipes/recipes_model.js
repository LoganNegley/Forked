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
};


module.exports ={
    getAllRecipes,
    findRecipeById, 
    getRecipesByUserId,
    addRecipeByUserId,
}