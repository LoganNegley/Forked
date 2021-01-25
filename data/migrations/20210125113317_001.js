
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl =>{
      tbl.increments('id');
      tbl.string('first_name').notNullable();
      tbl.string('last_name').notNullable();
      tbl.string('email').unique().notNullable();
      tbl.string('username').unique().notNullable();
      tbl.string('password').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
