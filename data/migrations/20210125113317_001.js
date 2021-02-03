// Users table build
exports.up = function(knex) {
  return(
    knex.schema
    .createTable('users', tbl =>{
      tbl.increments('user_id');
      tbl.string('first_name')
        .notNullable();
      tbl.string('last_name')
        .notNullable();
      tbl.string('email')
        .unique()
        .notNullable();
      tbl.string('username')
        .unique()
        .notNullable();
      tbl.string('password')
        .notNullable();
  })

// user cart table
    .createTable('cart', tbl =>{
      tbl.increments('cart_id');
      tbl.integer('user-id')
        .notNullable()
        .unsigned()
        .references('user_id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })

// Recipes table
    .createTable('recipes', tbl =>{
      tbl.increments('recipe_id');
      tbl.string('recipe-name')
        .unique()
        .notNullable();
      tbl.string('image');
      tbl.integer('prep-time')
        .notNullable();
      tbl.integer('cook-time')
        .notNullable();
      tbl.boolean('isPublic')
        .defaultTo('false')
        .notNullable();
      tbl.integer('user-id')
        .notNullable()
        .unsigned()
        .references('user_id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })

// Ingredients table
    .createTable('ingredients', tbl =>{
      tbl.increments('ingredient_id');
      tbl.string('ingredient-name')
        .notNullable()
        .unique();
      tbl.string('quantity')
        .notNullable();
    })

// usercart item table
    .createTable('cartItems', tbl =>{
      tbl.increments('cartItem_id');
      tbl.integer('ingredient-id')
        .notNullable()
        .unsigned()
        .references('ingredient_id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.integer('cart-id')
        .notNullable()
        .unsigned()
        .references('cart_id')
        .inTable('cart')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })

// Recipe_ingredient table
    .createTable('recipe_ingredient', tbl =>{
      tbl.integer('recipe-id')
        .notNullable()
        .unsigned()
        .references('recipe_id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onUpdate('CASCADE');
      tbl.integer('ingredient-id')
        .notNullable()
        .unsigned()
        .references('ingredient_id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.primary(['recipe-id', 'ingredient-id']);
    })



/////////////////////////////////////////////////Brake point on migration:latest
// Recipes steps table
    .createTable('steps', tbl =>{
      tbl.increments('id');
      tbl.string('instruction', [500])
        .notNullable();
      tbl.iteger('step-number')
        .notNullable();
      tbl.integer('recipe-id')
        .notNullable()
        .unsigned()
        .references('recipe_id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })

// public recipes
    .createTable('publicRecipes', tbl =>{
      tbl.increments('id');
      tbl.ingteger('user-id')
        .notNullable()
        .unsigned()
        .references('user_id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.integer('recipe-id')
        .notNullable()
        .unsigned()
        .references('recipe_id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.date('dateAdded')
        .notNullable();
    })

// favorite recipes
    .createTable('favoriteRecipes', tbl =>{
      tbl.increments('favorite-id');
      tbl.integer('user-id')
        .notNullable()
        .unsigned()
        .references('user_id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.date('dateAdded')
        .notNullable();
      tbl.integer('recipe-id')
        .notNullable()
        .unsigned()
        .reference('recipe_id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
)};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('favoriteRecipes')
  .dropTableIfExists('publicRecipes')
  .dropTableIfExists('steps')
  .dropTableIfExists('recipe_ingredient')
  .dropTableIfExists('cartItems')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('recipes')
  .dropTableIfExists('cart')
  .dropTableIfExists('users')
};
