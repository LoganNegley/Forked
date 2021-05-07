
exports.seed = function(knex, Promise) {
      return knex('recipes').insert([
        {
          recipeName: 'Tacos',
          image:'https://res.cloudinary.com/dluh5sm7o/image/upload/v1620418279/ryyzdpyjl1iis2siiqpv.png',
          prep_time:15,
          cook_time: 20,
          isPublic: true,
          userId: 1,
          isFavorite:false},

        {
          recipeName: 'Chocolate Chip Cookies',
          image:'https://res.cloudinary.com/dluh5sm7o/image/upload/v1620419260/rz2xljkg1h0pxehzyy2q.png',
          prep_time:15,
          cook_time: 30,
          isPublic: true,
          userId: 1,
          isFavorite:false},

        {
          recipeName: 'Strawberry Shake', 
          image:'https://res.cloudinary.com/dluh5sm7o/image/upload/v1620420004/zqz8vkzt5rwyg7dgd70e.png',
          prep_time:5,
          cook_time: 5,
          isPublic: false,
          userId: 1,
          isFavorite:false},

      ]);
};
