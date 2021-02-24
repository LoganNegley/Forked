const db = require('../data/db-config');

function findCartByUserId(id){
    return db('cart')
    .where('userId', id)
};

module.exports = {
    findCartByUserId,
}