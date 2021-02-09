const express = require('express');
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
router.get('/:id', (req, res) =>{
    db.findUserById(req.params.id)
    .then(user =>{
        if(user.length != 0){
            res.status(200).json(user)
        } else{
            res.status(404).json({errorMessage: 'Unable to find user with that ID'})
        }
    })
    .catch(error =>{
        res.status(500).json({message:'Failed to get user information'})
    });
});

// UPDATE user by ID
router.put('/:id', (req, res) =>{
    const {id} = req.params;
    const payload = req.body;

    db.findUserById(id) //find user if exists
    .then(user =>{
        if(user){
            db.updateUserById(payload, id)
            .then(updatedInfo =>{
                res.status(200).json(updatedInfo)
            }).catch(error =>{
                res.status(400).json({message:'Unable to update user, make sure payload matches required fields'})
            })
        } else{
            res.status(404).json({
                errorMessage:'Unable to find user with that ID'
            })
        }
    })
    .catch(error =>{
        res.status(500).json({message: 'Failed to update user'})
    });
});

// ADD user
router.post('/', (req,res) =>{
    const newUser = req.body;
    db.addUser(newUser)
    .then(user =>{
        res.status(201).json(user)
    })
    .catch(error =>{
        res.status(500).json({errorMessage:'Unable to create new user'})
    })
});



module.exports = router;