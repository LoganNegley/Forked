
exports.seed = function(knex, Promise) {
      return knex('recipe_ingredient').insert([
        {
          recipeId: 1,
          ingredientId:1},
        {
          recipeId: 1,
          ingredientId:2},
        {
          recipeId: 1,
          ingredientId:3},
        {
          recipeId: 1,
          ingredientId:4},
        {
          recipeId: 1,
          ingredientId:5},
        {
          recipeId: 1,
          ingredientId:6},
        {
          recipeId: 1,
          ingredientId:7},
        {
          recipeId: 1,
          ingredientId:8},
        {
          recipeId: 1,
          ingredientId:9},
        {
          recipeId: 1,
          ingredientId:10},
        {
          recipeId: 2,
          ingredientId:11},
        {
          recipeId: 2,
          ingredientId:12},
        {
          recipeId: 2,
          ingredientId:13},
        {
          recipeId: 2,
          ingredientId:14},
        {
          recipeId: 2,
          ingredientId:15},
        {
          recipeId: 2,
          ingredientId:16},
        {
          recipeId: 2,
          ingredientId:17},
        {
          recipeId: 2,
          ingredientId:18},
        {
          recipeId: 2,
          ingredientId:19},
        {
          recipeId: 2,
          ingredientId:20},
        {
          recipeId: 3,
          ingredientId:21},
        {
          recipeId: 3,
          ingredientId:22},
        {
          recipeId: 3,
          ingredientId:23},
        {
          recipeId: 3,
          ingredientId:24},
        
      ]);
};
