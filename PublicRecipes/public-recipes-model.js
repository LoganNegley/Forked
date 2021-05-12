const db = require('../data/db-config');

function getAllPublicRecipes(){
    return db('recipes as r')
    .join('publicRecipes', 'recipe_id', '=', 'recipeId' )
    .select('recipe_id', 'recipeName', 'image','prep_time', 'cook_time', 'r.userId')
};

function getPublicRecipeByUserId(id){
    return db('publicRecipes as pr')
    .join('recipes as r', 'pr.recipeId', '=', 'r.recipe_id')
    .select('r.recipe_id', 'r.recipeName', 'r.image', 'r.prep_time', 'r.cook_time', 'r.userId', 'r.isPublic',)
    .where('r.userId', id)
};

function addToPublicRecipe(recipeInfo){
    return db('publicRecipes')
    .insert({
        userId:recipeInfo.userId,
        recipeId:recipeInfo.recipe_id,
        })
    .returning('id')
};

function updateIsPublicRecipe(id, isPublic){
    return db('recipes')
    .where('recipe_id', '=', id)
    .update({isPublic:isPublic})
    .returning('recipe_id')
};

function deletePublicRecipeById(id){
    return db('publicRecipes')
    .where('recipeId', id)
    .del()
};

module.exports ={
    getAllPublicRecipes,
    getPublicRecipeByUserId,
    updateIsPublicRecipe,
    addToPublicRecipe,
    deletePublicRecipeById
}