// Users table build
exports.up = function(knex) {
  return( 
    knex.schema
    .createTable('users', tbl =>{
      tbl.increments('id');
      tbl.string('first_name').notNullable();
      tbl.string('last_name').notNullable();
      tbl.string('email').unique().notNullable();
      tbl.string('username').unique().notNullable();
      tbl.string('password').notNullable();
  })
    .createTable('cart', tbl =>{
      tbl.increments('id');
    })
)};


// user cart table
// usercart item table
// Recipes table
// Recipe_ingredient table
// Recipe ingredients table
// Recipes steps table
// public recipes
// favorite recipes





exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
