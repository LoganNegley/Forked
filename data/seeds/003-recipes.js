
exports.seed = function(knex, Promise) {
      return knex('recipes').insert([
        {
          recipeName: 'Tacos',
          image:null,
          prep_time:15,
          cook_time: 10,
          isPublic: true,
          userId: 1,
          isFavorite:false},

        {
          recipeName: 'Cake',
          image:null,
          prep_time:25,
          cook_time: 30,
          isPublic: true,
          userId: 2,
          isFavorite:false},

        {
          recipeName: 'Garlic Chicken',
          image:null,
          prep_time:10,
          cook_time: 45,
          isPublic: true,
          userId: 1,
          isFavorite:false},

        {
          recipeName: 'Salmon', 
          image:null,
          prep_time:5,
          cook_time: 20,
          isPublic: false,
          userId: 1,
          isFavorite:false},

        {
          recipeName: 'Soup',
          image:null,
          prep_time:15,
          cook_time: 30,
          isPublic: true,
          userId: 2,
          isFavorite:false},

        {
          recipeName: 'Cerial',
          image:null,
          prep_time:2,
          cook_time: 0,
          isPublic: false,
          userId: 3,
          isFavorite:false},

        {
          recipeName: 'Party Potatoes',
          image:null,
          prep_time:10,
          cook_time: 30,
          isPublic: true,
          userId: 3,
          isFavorite:false},

        {
          recipeName: 'Hotdogs',
          image:null,
          prep_time:5,
          cook_time: 10,
          isPublic: false,
          userId: 4,
          isFavorite:false},

        {
          recipeName: 'Vegi Tacos',
          image:null,
          prep_time:15,
          cook_time: 20,
          isPublic: true,
          userId: 4,
          isFavorite:false},

        {
          recipeName: 'Cabbage Soup',
          image:null,
          prep_time:20,
          cook_time: 35,
          isPublic: false,
          userId: 2,
          isFavorite:false},

        {
          recipeName: 'Ramen',
          image:null,
          prep_time:2,
          cook_time: 5,
          isPublic: true,
          userId: 4,
          isFavorite:false},

        {
          recipeName: 'Philly Sandwitch',
          image:null,
          prep_time:20,
          cook_time: 25,
          isPublic: false,
          userId: 3,
          isFavorite:false},
      ]);
};
