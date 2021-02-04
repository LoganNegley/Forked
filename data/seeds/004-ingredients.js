
exports.seed = function(knex, Promise) {
      return knex('ingredients').insert([
        {
          ingredient_name: 'ground meat',
          quantity:'1 pound'},

        {
          ingredient_name: 'taco shells',
          quantity:'5'},

        {
          ingredient_name: 'cake mix',
          quantity:'1 box'},

        {
          ingredient_name: 'egg',
          quantity:'2'},

        {
          ingredient_name: 'water',
          quantity:'3/4 cup'},

        {
          ingredient_name: 'chicken breast',
          quantity:'2'},

        {
          ingredient_name: 'garlic',
          quantity:'2tbs'},

        {
          ingredient_name: 'pepper',
          quantity:'1 tsp'},

        {
          ingredient_name: 'salmon',
          quantity:'1'},

        {
          ingredient_name: 'lemon',
          quantity:'1'},

        {
          ingredient_name: 'cerial of chose',
          quantity:'1 cup'},

        {
          ingredient_name: 'milk',
          quantity:'1 cup'},

        {
          ingredient_name: 'frozon potatoes',
          quantity:'1 bag'},

        {
          ingredient_name: 'cheese',
          quantity:'2 cups'},

        {
          ingredient_name: 'sour cream',
          quantity:'1 cup'},

        {
          ingredient_name: 'ballpark franks',
          quantity:'1 pack'},

        {
          ingredient_name: 'hotdog buns',
          quantity:'1 pack'},

        {
          ingredient_name: 'cabbage',
          quantity:'1/2 head'},

        {
          ingredient_name: 'ground sausage',
          quantity:'1 pound'},

        {
          ingredient_name: 'potatoes',
          quantity:'5'},

        {
          ingredient_name: 'beans',
          quantity:'1 can'},

        {
          ingredient_name: 'carrots',
          quantity:'2 sticks'},

        {
          ingredient_name: 'vegi meat',
          quantity:'1 pound'},

        {
          ingredient_name: 'taco shells',
          quantity:'5'},

        {
          ingredient_name: 'ramen noodles',
          quantity:'1 pack'},

        {
          ingredient_name: 'water',
          quantity:'1 cup'},

        {
          ingredient_name: 'philly meat',
          quantity:'1/2 pound'},

        {
          ingredient_name: 'green pepper',
          quantity:'1'},

        {
          ingredient_name: 'onion',
          quantity:'1/2'},
          
        {
          ingredient_name: 'cheese',
          quantity:'2 slices'},

      ]);
};
