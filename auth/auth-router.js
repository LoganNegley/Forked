const express = require('express');
const router = express.Router();
const usersModel = require('../Users/user-model');
const bcrypt = require('bcryptjs');
const cartModel = require('../Cart/cart-model');

router.post('/register', (req,res) =>{
    const newUser = req.body;
    const hash = bcrypt.hashSync(newUser.password, 10);         //hashing of user password
    newUser.password = hash;         //replacing newUser password with hash

    if(!newUser.first_name || !newUser.last_name || !newUser.email || !newUser.password ||!newUser.username){
        res.status(400).json({message: "Must fill out all fields"})
    }else{
        usersModel.addUser(newUser)
        .then(user =>{
            const userId = user[0] //get new users ID
            
            if(user){
                cartModel.addCartToUser(userId) //add a cart to new user 
                .then(cartId =>{
                    res.status(201).json({userId:userId})
                })
                .catch(error =>{
                    console.log(error)
                    res.status(500).json({errorMessage:'Failed to add cart to new user'})
                })
            }
        })
        .catch(error =>{
            console.log(error)
            res.status(500).json({errorMessage:'Unable to register user'})
        })
    }
});

router.post('/login', (req,res) =>{
    const {username, password} = req.body;

    usersModel.findByUsername(username)
    .first()
    .then(user =>{
        if(user && bcrypt.compareSync(password, user.password)){ //compare password to user password and hash in db
            req.session.user = user //adding user info to req session object
            res.status(200).json({message:`${user.username} verified and logged in`,
                                    user:{user}})
        } else{
            res.status(401).json({message:'invalid credentials'})
        }
    })
    .catch(error =>{
        console.log(error)
        res.status(500).json({errorMessage:'Failed to get user by username'})
    })
});

router.get('/logout', (req,res) =>{
    if(req.session){ //check if there is a session object
        req.session.destroy(err =>{ //takes session object out of memory
            if(err){ //error logging out and destroying session
                console.log(err);
                res.send('You are unable to logout at this time');
            }else{ //logout successful
                res.send('You have successfully logged out');
            }
        })
    }else{ //if no session object exists nothing to be done and end the process
        res.end();
    }
});

module.exports = router;