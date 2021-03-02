const db = require('../data/db-config');

function getIngredientsByRecipeId(id){ //not working properly
    return db('*')
    .from('ingredients as i')
    .join('recipe_ingredient as ri', 'ri.ingredientId', 'i.ingredient_id')
    .where('ri.recipeId', id)
};

function findIngredientById(id){
    return db('ingredients')
    .where('ingredient_id', id)
};

function addIngredient(ingredient){
    return db('ingredients')
    .returning('ingredient_id')
    .insert(ingredient)
};

function addIngredientToRecipe(ingredientId, recipeId){
    return db('recipe_ingredient')
    .insert({recipeId:recipeId, ingredientId:ingredientId})
};

function deleteIngredientById(id){
    return db('ingredients')
    .where('ingredient_id', id)
    .del()
};

module.exports ={
    getIngredientsByRecipeId,
    findIngredientById,
    addIngredient,
    addIngredientToRecipe,
    deleteIngredientById
}