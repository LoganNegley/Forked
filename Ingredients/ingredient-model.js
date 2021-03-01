const db = require('../data/db-config');

function getIngredientsByRecipeId(id){
    return db('*')
    .from('ingredients as i')
    .join('recipe_ingredient as ri', 'ri.ingredientId', 'i.ingredient_id')
    .where('ri.recipeId', id)

};

module.exports ={
    getIngredientsByRecipeId
}