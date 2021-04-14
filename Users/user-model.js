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

//find user by username
function findByUsername(username){
    return db.select('*')
    .from('users')
    .where('username', username)
};

// UPDATE user by ID
function updateUserById(changes, id){
    return db('users')
    .where('user_id', id)
    .update(changes)
    .returning('id')

};

// ADD user
function addUser(user){
    return db('users')
    .insert(user)
    .returning('id')
};

// DELETE user
function deleteUserById(id){
    return db('users')
    .where('user_id', id)
    .del()
};



// exporting functions for model
 module.exports = {
     getAllUsers,
     findUserById,
     findByUsername,
     updateUserById,
     addUser,
     deleteUserById,
 }