
exports.seed = function(knex, Promise) {
      return knex('recipe_ingredient').insert([
        {
          recipeId: 1,
          ingredientId:1},
        {
          recipeId: 1,
          ingredientId:1},
        {
          recipeId: 2,
          ingredientId:2},
        {
          recipeId: 2,
          ingredientId:3},
        {
          recipeId: 2,
          ingredientId:3},
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
          recipeId: 3,
          ingredientId:9},
        {
          recipeId: 4,
          ingredientId:10},
        {
          recipeId: 4,
          ingredientId:11},
        {
          recipeId: 5,
          ingredientId:12},
        {
          recipeId: 5,
          ingredientId:13},
        {
          recipeId: 6,
          ingredientId:14},
        {
          recipeId: 6,
          ingredientId:14},
        {
          recipeId: 6,
          ingredientId:14},
        {
          recipeId: 7,
          ingredientId:15},
        {
          recipeId: 7,
          ingredientId:16},
        {
          recipeId: 8,
          ingredientId:17},
        {
          recipeId: 8,
          ingredientId:18},
        {
          recipeId: 8,
          ingredientId:19},
        {
          recipeId: 8,
          ingredientId:20},
        {
          recipeId: 8,
          ingredientId:21},
        {
          recipeId: 9,
          ingredientId:22},
        {
          recipeId: 9,
          ingredientId:23},
        {
          recipeId: 10,
          ingredientId:24},
        {
          recipeId: 10,
          ingredientId:25},
        {
          recipeId: 11,
          ingredientId:26},
        {
          recipeId: 11,
          ingredientId:27},
        {
          recipeId: 11,
          ingredientId:28},
        {
          recipeId: 11,
          ingredientId:29},
      ]);
};
