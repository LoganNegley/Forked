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
    .insert(ingredient)
    .returning('ingredient_id')

    };

function addIngredientToRecipe(iId, rId){
    return db('recipe_ingredient')
    .insert({ingredientId:iId, recipeId:rId})
    .returning('ingredientId')
};

function deleteIngredientById(id){
    return db('ingredients')
    .where('ingredient_id', id)
    .del()
};

function updateIngredient(id, changes){
    return db('ingredients')
    .where('ingredient_id', id)
    .update(changes)
    .returning('ingredient_id')
};

module.exports ={
    getIngredientsByRecipeId,
    findIngredientById,
    addIngredient,
    addIngredientToRecipe,
    deleteIngredientById,
    updateIngredient
}