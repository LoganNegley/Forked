
exports.seed = function(knex, Promise) {
      return knex('publicRecipes').insert([
        {
        userId: 1,
        recipeId: 1
        },
        {
        userId: 1,
        recipeId: 2
        },

      ]);
};
