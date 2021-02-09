const db = require('../data/db-config');

function getAllRecipes(){
    return db('recipes')
    .from('recipes')
};

function findRecipeById(id){
    return db('recipes')
    .from('recipes')
    .where('recipe_id', id)
}


module.exports ={
    getAllRecipes,
    findRecipeById
}