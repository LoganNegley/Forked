
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {first_name: 'Logan', last_name:'Negley',email:'logannegley@gmail.com', username:'ElemenPhoenix', password:'myPassword'},

        {first_name: 'Heather', last_name:'Cash',email:'hlcash88@gmail.com', username:'HCash', password:'password'}
      ]);
    });
};
