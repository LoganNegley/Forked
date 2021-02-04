
exports.seed = function(knex, Promise) {
      return knex('steps').insert([
        {instruction: 'ground meat in skillet',
        step_number: 1,
        recipeId: 1},

        {instruction: 'add taco seansoning ',
        step_number: 2,
        recipeId: 1},

        {instruction: 'add cake mix in a bowl',
        step_number: 1,
        recipeId: 2},

        {instruction: 'add egg to bowl and mix',
        step_number: 2,
        recipeId: 2},

        {instruction: 'season chicken breast',
        step_number: 1,
        recipeId: 3},

        {instruction: 'place on pan and place in oven at 425 deg',
        step_number: 2,
        recipeId: 3},

        {instruction: 'season fish to taste',
        step_number: 1,
        recipeId: 4},

        {instruction: 'heat skillet to temp',
        step_number: 2,
        recipeId: 4},

        {instruction: 'place fish on skillet 5 min each side',
        step_number: 3,
        recipeId: 4},

        {instruction: 'place on plate and server with lemon',
        step_number: 4,
        recipeId: 4},

        {instruction: 'cut cabbage in pieces',
        step_number: 1,
        recipeId: 5},

        {instruction: 'pour cerial into medium bowl',
        step_number: 1,
        recipeId: 6},

        {instruction: 'add milk on top of cerial and eat',
        step_number: 2,
        recipeId: 6},

        {instruction: 'mix cheees and frozen potatoes together',
        step_number: 1,
        recipeId: 7},
        
        {instruction: 'add to pan',
        step_number: 2,
        recipeId: 7},
        
        {instruction: 'bake in oven for 45 mins',
        step_number: 3,
        recipeId: 7},

        {instruction: 'place hotdogs into boiling water in pot',
        step_number: 1,
        recipeId: 8},

        {instruction: 'ground vegi meat in skillet',
        step_number: 1,
        recipeId: 9},

        {instruction: 'add seasoning',
        step_number: 2,
        recipeId: 9},

        {instruction: 'cut potatoes into quarters',
        step_number: 1,
        recipeId: 10},
        
        {instruction: 'gorund meat in skillet',
        step_number: 2,
        recipeId: 10},

        {instruction: 'place noodles in bowl add water',
        step_number: 1,
        recipeId: 11},

        {instruction: 'heat up meat in skillet',
        step_number: 1,
        recipeId: 12},

        {instruction: 'place onion and green pepper on skillet',
        step_number: 2,
        recipeId: 12},

        {instruction: 'place on bunn',
        step_number: 3,
        recipeId: 12},

        {instruction: 'add cheese to the top',
        step_number: 4,
        recipeId: 12},
      ]);
};
