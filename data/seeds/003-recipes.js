
exports.seed = function(knex, Promise) {
      return knex('recipes').insert([
        {
          recipeName: 'Tacos',
          image:'',
          prep_time:15,
          cook_time: 10,
          isPublic: true,
          userId: 1},

        {
          recipeName: 'Cake',
          image:'',
          prep_time:25,
          cook_time: 30,
          isPublic: true,
          userId: 2},

        {
          recipeName: 'Garlic Chicken',
          image:'',
          prep_time:10,
          cook_time: 45,
          isPublic: true,
          userId: 1},

        {
          recipeName: 'Salmon', 
          image:'',
          prep_time:5,
          cook_time: 20,
          isPublic: false,
          userId: 1},

        {
          recipeName: 'Soup',
          image:'',
          prep_time:15,
          cook_time: 30,
          isPublic: true,
          userId: 2},

        {
          recipeName: 'Cerial',
          image:'',
          prep_time:2,
          cook_time: 0,
          isPublic: false,
          userId: 3},

        {
          recipeName: 'Party Potatoes',
          image:'',
          prep_time:10,
          cook_time: 30,
          isPublic: true,
          userId: 3},

        {
          recipeName: 'Hotdogs',
          image:'',
          prep_time:5,
          cook_time: 10,
          isPublic: false,
          userId: 4},

        {
          recipeName: 'Vegi Tacos',
          image:'',
          prep_time:15,
          cook_time: 20,
          isPublic: true,
          userId: 4},

        {
          recipeName: 'Cabbage Soup',
          image:'',
          prep_time:20,
          cook_time: 35,
          isPublic: false,
          userId: 2},

        {
          recipeName: 'Ramen',
          image:'',
          prep_time:2,
          cook_time: 5,
          isPublic: true,
          userId: 4},

        {
          recipeName: 'Philly Sandwitch',
          image:'',
          prep_time:20,
          cook_time: 25,
          isPublic: false,
          userId: 3},
      ]);
};
