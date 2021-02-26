const express = require('express');
const validateUser = require('../middleware/validateUserId');

const router = express.Router();
const db = require('./public-recipes-model');

// GET all public recipes
router.get('/', (req,res) =>{
    db.getAllPublicRecipes()
    .then(recipes =>{
        res.status(200).json(recipes)
    })
    .catch(error =>{
        console.log(error)
        res.status(500).json({errorMessage:'Failed to get public recipes'})
    })
});

module.exports = router;
