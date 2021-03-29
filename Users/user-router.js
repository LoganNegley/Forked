const express = require('express');
const validateUserId = require('../middleware/validateUserId');
const cartModel = require('../Cart/cart-model');

const router = express.Router();

// using users model
const db = require('./user-model');

// get ALL users
router.get('/', (req, res) =>{
    db.getAllUsers()
    .then(users =>{
        res.status(200).json(users)
    })
    .catch(error =>{
        res.status(404).json({errorMessage:'Unable to get users'})
    });
});

// find USER by ID
router.get('/:id',  validateUserId,  (req, res) =>{
    const {id} = req.params

    db.findUserById(id)
    .then(user =>{
        res.status(200).json(user)
    })
    .catch(error =>{
        res.status(500).json({message:'Failed to get user information'})
    });
});

// UPDATE user by ID
router.put('/:id', validateUserId, (req, res) =>{
    const {id} = req.params;
    const payload = req.body;

    db.findUserById(id) //find user if exists
    .then(user =>{
        db.updateUserById(payload, id)
            .then(updatedInfo =>{
                res.status(200).json(updatedInfo)
            })
            .catch(error =>{
            res.status(400).json({message:'Unable to update user, make sure payload matches required fields'})
            })
    })
    .catch(error =>{
        res.status(500).json({message: 'Failed to update user'})
    });
});

// Delete user
router.delete('/:id', validateUserId, (req, res)=>{
    const {id} = req.params;

    db.findUserById(id)
    .then(user =>{
        if(user){
            db.deleteUserById(id)
            .then(user =>{
                res.status(200).json({removed: user})
            })
            .catch(error =>{
                console.log(error)
                res.status(500).json({errorMessage:'Failed to delete user'})
            })
        }else{
            res.status(404).json({message:'Unable to find user with that ID'})
        }
    })
    .catch(error =>{
        console.log(error)
        res.status(500).json({errorMessage:'Failed to find user with ID'})
    })
});

module.exports = router;