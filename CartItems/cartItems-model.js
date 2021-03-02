const db = require('../data/db-config');

function getAllCartItems(){
    return db('cartItems as ci')
    .select('ci.cartItem_id', 'i.ingredient_id', 'i.ingredient_name','i.quantity')
    .join('cart as c', 'c.cart_id', '=', 'ci.cartId')
    .join('ingredients as i', 'i.ingredient_id', '=', 'ci.ingredientId')
};

function getCartItemById(id){
    return db('cartItems as ci')
    .select('ci.cartItem_id', 'i.ingredient_id', 'i.ingredient_name','i.quantity')
    .join('cart as c', 'c.cart_id', '=', 'ci.cartId')
    .join('ingredients as i', 'i.ingredient_id', '=', 'ci.ingredientId')
    .where('ci.cartItem_id', id)
};


module.exports ={
    getAllCartItems,
    getCartItemById,
}