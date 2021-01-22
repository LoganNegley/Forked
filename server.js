const express = require('express');


const server = express();

server.use(express.json());

// Routes

module.exports = server