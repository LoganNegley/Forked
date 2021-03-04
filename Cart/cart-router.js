const express = require('express');
const router = express.Router();
const validateUser = require('../middleware/validateUserId');

const db = require('./cart-model');

// get user cart by ID
router.get('/user/:id', validateUser, (req,res) =>{
    const {id} = req.params;

    db.findCartByUserId(id)
    .then(cart =>{
        res.status(200).json(cart)
    })
    .catch(error =>{
        console.log(error)
        res.status(500).json({errorMessage:'Failed to user cart'})
    })

});

// Get all carts for users
router.get('/', (req, res) =>{
    db.getAllCarts()
    .then(carts =>{
        res.status(200).json(carts)
    })
    .catch(error =>{
        console.log(error)
        res.status(500).json({errorMessage:'Failed to get carts data'})
    })
});

module.exports = router;