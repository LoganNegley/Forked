const db = require('../data/db-config');

// Get all favorites
function getAllFavorites(){
    return db('favoriteRecipes as fr')
    .select('fr.favorite_id', 'fr.userId', 'fr.recipeId', 'r.recipeName', 'r.image', 'r.prep_time', 'r.cook_time', 'r.isPublic')
    .join('recipes as r', 'fr.recipeId', 'r.recipe_id')
};

// Get favorite by id
function getFavoriteById(id){
    return db('favoriteRecipes as fr')
    .select('fr.favorite_id', 'fr.userId', 'fr.recipeId', 'r.recipeName', 'r.image', 'r.prep_time', 'r.cook_time', 'r.isPublic')
    .join('recipes as r', 'fr.recipeId', 'r.recipe_id')
    .where('r.recipe_id', id)
};

// get users favorite by user Id
function getFavoritesByUserId(id){
    return db('favoriteRecipes as fr')
    .select('fr.favorite_id', 'fr.userId', 'fr.recipeId', 'r.recipeName', 'r.image', 'r.prep_time', 'r.cook_time', 'r.isPublic')
    .join('recipes as r', 'fr.recipeId', 'r.recipe_id')
    .where('fr.userId', id)
};

// add favorite 
function addFavorite(recipe){
    return db('favoriteRecipes')
    .insert(recipe)
    .returning('favorite_id')
};

// Update favorite by ID

// delete favorite by recipe ID
function deleteFavoriteByRecipeId(id){
    return db('favoriteRecipes')
    .where('recipeId' , id)
    .del()
};

module.exports ={
getAllFavorites,
getFavoritesByUserId,
getFavoriteById,
addFavorite,
deleteFavoriteByRecipeId
};

