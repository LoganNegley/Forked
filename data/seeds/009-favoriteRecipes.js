exports.seed = function(knex, Promise) {
      return knex('favoriteRecipes').insert([

        {
        userId: 1,
        recipeId: 3,
        dateAdded: 12/10/2015},

        {
        userId: 2,
        recipeId: 2,
        dateAdded: 04/03/2017},

        {
        userId: 2,
        recipeId: 5,
        dateAdded: 11/15/2002},

        {
        userId: 3,
        recipeId: 7,
        dateAdded: 01/15/2017},

        {
        userId: 4,
        recipeId: 9,
        dateAdded: 05/09/2020},
      ]);
};

