const express = require('express');
const UserRouter = require('../Users/users-router')

const server = express();

server.use(express.json());
server.use('/user', UserRouter)

// Routes

server.get('/', (req, res) =>{
res.status(200).json({message: 'Api up and running'})
});

module.exports = server