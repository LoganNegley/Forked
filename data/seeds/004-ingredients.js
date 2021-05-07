
exports.seed = function(knex, Promise) {
      return knex('ingredients').insert([
        {
          ingredient_name: 'ground beef',
          quantity:'1 pound'},
        {
          ingredient_name: 'chili powder',
          quantity:'1 tbs'},
        {
          ingredient_name: 'ground cumin',
          quantity:'1 tps'},
        {
          ingredient_name: 'salt',
          quantity:'3/4 tps'},
        {
          ingredient_name: 'dried oregano',
          quantity:'1/2 tps'},
        {
          ingredient_name: 'garlic powder',
          quantity:'1/2 tps'},
        {
          ingredient_name: 'ground black pepper',
          quantity:'1/4 tps'},
        {
          ingredient_name: 'tomato sauce',
          quantity:'1/2 cup'},
        {
          ingredient_name: 'water',
          quantity:'1/4 cup'},
        {
          ingredient_name: 'taco shells',
          quantity:'12'},
        {
          ingredient_name: 'all-purpose flour',
          quantity:'2 1/4'},
        {
          ingredient_name: 'baking soda',
          quantity:'1 tsp'},
        {
          ingredient_name: 'salt',
          quantity:'1/2 tsp'},
        {
          ingredient_name: 'butter, softened',
          quantity:'1 cup'},
        {
          ingredient_name: ' granulated sugar',
          quantity:'3/4 cup'},
        {
          ingredient_name: 'packed brown sugar',
          quantity:'3/4 cup'},
        {
          ingredient_name: 'egg',
          quantity:'1'},
        {
          ingredient_name: 'vanilla',
          quantity:'1 tsp'},
        {
          ingredient_name: ' semisweet chocolate chips',
          quantity:'2 cups'},
        {
          ingredient_name: 'coarsely chopped nuts, if desired',
          quantity:'1 cup'},



        {
          ingredient_name: 'frozen strawberries',
          quantity:'2 cup'},
        {
          ingredient_name: 'cups milk',
          quantity:'1 1/2 cup'},
        {
          ingredient_name: 'strawberry ice cream',
          quantity:'1 cup'},
        {
          ingredient_name: 'Freshly whipped cream, for serving',
          quantity:'1/2 cup'},
      ]);
};
