
exports.seed = function(knex, Promise) {
      return knex('cartItems').insert([
        {ingredientId: 1,
        cartId: 2},
        {ingredientId: 2,
        cartId: 2},
        {ingredientId: 4,
        cartId: 1},
        {ingredientId: 7,
        cartId: 1},
        {ingredientId: 3,
        cartId: 1},
      ]);
};
