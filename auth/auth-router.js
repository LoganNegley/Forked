const express = require('express');
const router = express.Router();
const db = require('../data/db-config');
const usersModel = require('../Users/user-model');

router.post('/register', (req,res) =>{
    const newUser = req.body;
    console.log(newUser)
    db.addUser(newUser)
    .then(user =>{
        res.status(201).json(user)
    })
    .catch(error =>{
        console.log(error)
        res.status(400).json({errorMessage:'Unable to register user'})
    })
});

module.exports = router;