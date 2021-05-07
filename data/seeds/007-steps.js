
exports.seed = function(knex, Promise) {
      return knex('steps').insert([
        {instruction: 'Add the beef to a large skillet over medium-high heat. Break the meat apart with a wooden spoon. Add the chili powder, cumin, salt, oregano, garlic powder, and pepper to the meat. Stir well. Cook until the meat is cooked through, about 6-8 minutes, stirring occasionally.',
        step_number: 1,
        recipeId: 1},

        {instruction: 'Reduce the heat to medium. Add the tomato sauce and water. Stir to combine. Cook, stirring occasionally, for 7-8 minutes, until some of the liquid evaporates but the meat mixture is still a little saucy. Remove from the heat.',
        step_number: 2,
        recipeId: 1},

        {instruction: 'Warm the taco shells according to their package directions.',
        step_number: 3,
        recipeId: 1},

        {instruction: 'Fill the taco shells with 2 heaping tablespoons of taco meat. Top with desired taco toppings: shredded cheese, shredded lettuce, chopped tomatoes, diced red onion, taco sauce, sour cream, guacamole, etc',
        step_number: 4,
        recipeId: 1},


        {instruction: 'Heat oven to 375°F. In small bowl, mix flour, baking soda and salt; set aside.',
        step_number: 1,
        recipeId: 2},

        {instruction: 'In large bowl, beat softened butter and sugars with electric mixer on medium speed, or mix with spoon about 1 minute or until fluffy, scraping side of bowl occasionally.',
        step_number: 2,
        recipeId: 2},

        {instruction: 'Beat in egg and vanilla until smooth. Stir in flour mixture just until blended (dough will be stiff). Stir in chocolate chips and nuts',
        step_number: 3,
        recipeId: 2},

        {instruction: 'Onto ungreased cookie sheets, drop dough by rounded tablespoonfuls 2 inches apart',
        step_number: 4,
        recipeId: 2},
        
        {instruction: 'Bake 8 to 10 minutes or until light brown (centers will be soft). Cool 2 minutes; remove from cookie sheet to cooling rack. Cool completely, about 30 minutes. Store covered in airtight container.',
        step_number: 5,
        recipeId: 2},



        {instruction: 'In a blender, combine the strawberries, milk and ice cream.',
        step_number: 1,
        recipeId: 3},

        {instruction: 'Pureé until thick and creamy',
        step_number: 2,
        recipeId: 3},

        {instruction: 'garnish with whipped cream. Serve.',
        step_number: 3,
        recipeId: 3},
      ]);
};
