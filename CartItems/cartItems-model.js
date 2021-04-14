const db = require('../data/db-config');

function getAllCartItems(){
    return db('cartItems as ci')
    .select('ci.cartItem_id', 'i.ingredient_id', 'i.ingredient_name','i.quantity')
    .join('ingredients as i', 'i.ingredient_id', '=', 'ci.ingredientId')
};

function getCartItemById(id){
    return db('cartItems as ci')
    .select('ci.cartItem_id', 'i.ingredient_id', 'i.ingredient_name','i.quantity')
    .join('ingredients as i', 'i.ingredient_id', '=', 'ci.ingredientId')
    .where('ci.cartItem_id', id)
};

function getCartItemsByUserId(id){
 return db('cartItems as ci')
    .select('ci.cartItem_id', 'i.ingredient_id', 'i.ingredient_name','i.quantity')
    .join('cart as c', 'c.cart_id', '=', 'ci.cartId')
    .join('ingredients as i', 'i.ingredient_id', '=', 'ci.ingredientId')
    .where('c.userId', id)
};

// Add item to users cart
function addItemToUserCart(cart_id, ingredId){
    return db('cartItems')
    .insert({ingredientId:ingredId, cartId:cart_id} )
    .returning('id')
};

// Delete cart item by item ID
function deleteItemFromUserCart(id){
    return db('cartItems')
    .where('ingredientId', id)
    .del()
};



module.exports ={
    getAllCartItems,
    getCartItemById,
    getCartItemsByUserId,
    addItemToUserCart,
    deleteItemFromUserCart
}