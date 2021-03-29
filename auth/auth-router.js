const express = require('express');
const router = express.Router();
const usersModel = require('../Users/user-model');
const bcrypt = require('bcryptjs');

router.post('/', (req,res) =>{
    const newUser = req.body;

    const hash = bcrypt.hashSync(newUser.password, 10);         //hashing of user password
    newUser.password = hash;         //replacing newUser password with hash

    usersModel.addUser(newUser)
    .then(user =>{
        res.status(201).json(user)
    })
    .catch(error =>{
        console.log(error)
        res.status(500).json({errorMessage:'Unable to register user'})
    })
});

router.post('/login', (req,res) =>{
    const {username, password} = req.body;

    usersModel.findByUsername(username)
    .first()
    .then(user =>{
        if(user && bcrypt.compareSync(password, user.password)){
            res.status(200).json({message:`${user.username} verified and logged in`})
        } else{
            res.status(401).json({message:'invalid credentials'})
        }
    })
    .catch(error =>{
        console.log(error)
        res.status(500).json({errorMessage:'Failed to get user by username'})
    })
});

module.exports = router;