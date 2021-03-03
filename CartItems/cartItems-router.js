const express = require('express');
const router = express.Router();
const validateUser = require('../middleware/validateUserId');
const findCart = require('../Cart/cart-model');

const db = require('./cartItems-model');

// Get all cart Items
router.get('/', (req,res) =>{
    db.getAllCartItems()
    .then(items =>{
        res.status(200).json(items)
    })
    .catch(error =>{
        res.status(500).json({errorMessage:'Failed to get cart items'})
    })
});

// Get cart item by ID
router.get('/:id', (req,res) =>{
    const {id} = req.params;

    db.getCartItemById(id)
    .then(item =>{
        if(item.length > 0){
            res.status(200).json(item)
        }else{
            res.status(404).json({message:'Unable to find cart item Id'})
        }
    })
    .catch(error =>{
        res.status(500).json({errorMessage:'Failed to get cart item by Id'})
    })
});

// Get items in cart by cart id
router.get('/user/:id', validateUser, (req,res) =>{
    const {id} = req.params;

    db.getCartItemsByUserId(id)
    .then(items =>{
        res.status(200).json(items)
    })
    .catch(error =>{
        res.status(500).json({errorMessage:'Failed to get item in cart with that Id'})
    })
});

// Add ingredient to users cart by ID
router.post('/user/:id/ingredient/:ingredientId', validateUser, (req,res) =>{
    const userId = req.params.id;
    const ingredId = req.params.ingredientId;
    console.log(req.params)
    
    findCart.findCartByUserId(userId)
    .then(userCartInfo =>{
        const userCartId = userCartInfo[0].cart_id;
        console.log(userCartId)
        db.addItemToUserCart( userCartId, ingredId)
        .then(added =>{
            res.status(200).json(added)
        })
        .catch(error =>{
            console.log(error)
            res.status(500).json({errorMessage:'Failed to add ingredient to users cart'})
        })
    })
    .catch(error =>{
        console.log(error)
        res.status(500).json({errorMessage:'Failed to find cart for user'})
    })
});

router.delete('user/:userId/ingredient/:id', (req,res) =>{
    const {id} = req.params;
    const {userId} =req.params

    db.getCartItemsByUserId(userId)
    .then(userCart =>{
        console.log(userCart, "in cart")
        // if(found.length > 0){
        //     db.deleteItemFromUserCart(id)
        //     .then(item =>{
        //         res.status(200).json({deleted:item})
        //     })
        //     .catch(error =>{
        //         res.status(500).json({errorMessage:'Failed to delete ingredient from cart'})
        //     })
        // }else{
        //     res.status(404).json({message:'Unable to find ingredient with that ID in cart'})
        // }
    })
    .catch(error =>{
        res.status(500).json({errorMessage:'Failed to find ingredient with that ID'})
    })
});

module.exports = router;