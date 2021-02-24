const express = require('express');
const UserRouter = require('../Users/user-router');
const RecipeRouter = require('../Recipes/recipes_router');


const server = express();

// Middleware
server.use(express.json());


// Routers
server.use('/users', UserRouter);
server.use('/recipes', RecipeRouter);


// Routes
server.get('/', (req, res) =>{
res.status(200).json({message: 'Api up and running'})
});

module.exports = server
