
exports.seed = function(knex, Promise) {
  // Inserts seed entries
    return knex('users').insert([
      {
        first_name: 'Logan', 
        last_name:'Negley',
        email:'logannegley@gmail.com', username:'ElemenPhoenix', 
        password:'myPassword'},

      {
        first_name: 'Heather', 
        last_name:'Cash',
        email:'hlcash88@gmail.com', 
        username:'HCash', 
        password:'password'},

      {
        first_name:'Michelle',
        last_name: 'Anderston',
        email:'MD.Anderson@verizon.com',
        password:'123password' }

        {
          first_name:'Katie',
          last_name:'Anderson',
          email:'katieIsGreat@gmail.com',
          password:'helloPassword'
        }
    ]);
};
