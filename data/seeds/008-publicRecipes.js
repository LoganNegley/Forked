
exports.seed = function(knex, Promise) {
      return knex('publicRecipes').insert([
        {
        userId: 1,
        recipeId: 1,
        dateAdded: 01/22/2019},

        {
        userId: 1,
        recipeId: 3,
        dateAdded: 12/10/2020},

        {
        userId: 2,
        recipeId: 2,
        dateAdded: 04/03/2015},

        {
        userId: 2,
        recipeId: 5,
        dateAdded: 12/10/2002},

        {
        userId: 3,
        recipeId: 7,
        dateAdded: 06/15/2018},

        {
        userId: 4,
        recipeId: 9,
        dateAdded: 07/10/2019},

        {
        userId: 4,
        recipeId: 11,
        dateAdded: 10/20/2020},
      ]);
};
