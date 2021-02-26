const db = require('../data/db-config');

function findCartByUserId(id){
    return db('cart')
    .where('userId', id)
};

function addCartToUser(id){
    return db('cart')
    .insert({userId: id})

};

module.exports = {
    findCartByUserId,
    addCartToUser,
}