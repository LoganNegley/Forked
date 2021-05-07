exports.seed = function(knex, Promise) {
      return knex('favoriteRecipes').insert([

        {
        userId: 1,
        recipeId: 3
        },

      ]);
};

