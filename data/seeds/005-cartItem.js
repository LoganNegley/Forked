
exports.seed = function(knex, Promise) {
      return knex('cartItems').insert([
        {ingredientId: 1,
        cartId: 1},
        {ingredientId: 2,
        cartId: 1},

      ]);
};
