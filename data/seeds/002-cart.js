
exports.seed = function(knex, Promise) {
    // Inserts seed entries
    return knex('cart').insert([
      {userId: 1},
    ]);
};
