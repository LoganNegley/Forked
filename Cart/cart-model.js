const db = require('../data/db-config');

function findCartByUserId(id){
    return db('cart')
    .where('userId', id)
};

function addCartToUser(userId){
    return db('cart')
    .insert(userId)

};

module.exports = {
    findCartByUserId,
    addCartToUser,
}