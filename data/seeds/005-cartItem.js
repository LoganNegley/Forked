
exports.seed = function(knex, Promise) {
      return knex('cartItems').insert([
        {ingredientId: 1,
        cartId: 1},
        {ingredientId: 2,
        cartId: 1},
        {ingredientId: 4,
        cartId: 2},
        {ingredientId: 3,
        cartId: 2},
        {ingredientId: 11,
        cartId: 3},
      ]);
};
