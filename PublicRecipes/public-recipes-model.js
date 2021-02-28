const db = require('../data/db-config');

function getAllPublicRecipes(){
    return db('recipes as r')
    .join('publicRecipes', 'recipe_id', '=', 'recipeId' )
    .select('recipe_id', 'recipeName', 'image','prep_time', 'cook_time', 'r.userId', 'dateAdded')
};

function getPublicRecipeByUserId(id){
    return db('publicRecipes as pr')
    .join('recipes as r', 'pr.recipeId', '=', 'r.recipe_id')
    .select('r.recipe_id', 'r.recipeName', 'r.image', 'r.prep_time', 'r.cook_time', 'r.userId', 'pr.dateAdded')
    .where('r.userId', id)
};

function addPublicRecipe(id){

};

module.exports ={
    getAllPublicRecipes,
    getPublicRecipeByUserId,
    addPublicRecipe,
}