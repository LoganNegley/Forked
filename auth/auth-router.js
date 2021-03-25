const express = require('express');
const router = express.Router();
const usersModel = require('../Users/user-model');
const bcrypt = require('bcryptjs');

router.post('/', (req,res) =>{
    const newUser = req.body;
    const hash = bcrypt.hashSync(newUser.password, 10);


    usersModel.addUser(newUser)
    .then(user =>{
        res.status(201).json({userId: user})
    })
    .catch(error =>{
        console.log(error)
        res.status(404).json({errorMessage:'Unable to register user'})
    })
});

module.exports = router;