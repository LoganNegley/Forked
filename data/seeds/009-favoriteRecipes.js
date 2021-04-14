exports.seed = function(knex, Promise) {
      return knex('favoriteRecipes').insert([

        {
        userId: 1,
        recipeId: 3
        },

        {
        userId: 2,
        recipeId: 2
        },

        {
        userId: 2,
        recipeId: 5,
        },

        {
        userId: 3,
        recipeId: 7
        },

        {
        userId: 4,
        recipeId: 9
        },
      ]);
};

