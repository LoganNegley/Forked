const express = require('express');
const router = express.Router();

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
            res.status(404).json({message:'Unable to find cart item with that Id'})
        }
    })
    .catch(error =>{
        res.status(500).json({errorMessage:'Failed to get cart item by Id'})
    })
});

module.exports = router;