
exports.seed = function(knex, Promise) {
      return knex('recipe_ingredient').insert([
        {
          recipeId: 1,
          ingredientId:1},
        {
          recipeId: 1,
          ingredientId:2},
        {
          recipeId: 2,
          ingredientId:3},
        {
          recipeId: 2,
          ingredientId:4},
        {
          recipeId: 2,
          ingredientId:5},
        {
          recipeId: 3,
          ingredientId:6},
        {
          recipeId: 3,
          ingredientId:7},
        {
          recipeId: 3,
          ingredientId:8},
        {
          recipeId: 4,
          ingredientId:9},
        {
          recipeId: 4,
          ingredientId:10},
        {
          recipeId: 6,
          ingredientId:11},
        {
          recipeId: 6,
          ingredientId:12},
        {
          recipeId: 7,
          ingredientId:13},
        {
          recipeId: 7,
          ingredientId:14},
      ]);
};
