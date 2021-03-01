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

function addIngredientToRecipe(id){

};

module.exports ={
    getIngredientsByRecipeId,
    findIngredientById
}