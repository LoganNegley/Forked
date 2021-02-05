
exports.seed = function(knex, Promise) {
    // Inserts seed entries
    return knex('cart').insert([
      {userId: 1},
      {userId: 2},
      {userId: 3},
      {userId: 4},
    ]);
};
