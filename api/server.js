const express = require('express');

const server = express();

server.use(express.json());

// Routes

server.get('/', (req, res) =>{
res.status(200).json({message: 'Api up and running'})
});

module.exports = server