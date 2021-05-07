
exports.seed = function(knex, Promise) {
  // Inserts seed entries
    return knex('users').insert([
      {
        first_name: 'Logan', 
        last_name:'Negley',
        email:'logannegley@hotmail.com', 
        username:'ElemenPhoenix', 
        password:'myPassword'},
    ]);
};
