const db = require('../data/db-config');

function getAllPublicRecipes(){
    return db('recipes as r')

    .join('publicRecipes', 'recipe_id', '=', 'recipeId' )

    .select('recipe_id', 'recipeName', 'image','prep_time', 'cook_time', 'r.userId', 'dateAdded')

};

module.exports ={
    getAllPublicRecipes,
}