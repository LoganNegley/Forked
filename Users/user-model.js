const db = require('../data/db-config');

// get ALL users
function getAllUsers(){
    return db('users')
    .from('users')
};


// find USER by ID
function findUserById(userId){
    return db.select('*')
    .from('users')
    .where('user_id', userId)
};

// UPDATE user by ID
function updateUserById(changes, id){
    return db('users')
    .where('user_id', id)
    .update(changes)

};

// ADD user
function addUser(user){
    return db('users')
    .insert(user)
};



// exporting functions for model
 module.exports = {
     getAllUsers,
     findUserById,
     updateUserById,
     addUser
 }