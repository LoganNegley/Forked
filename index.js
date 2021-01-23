require('dotenv').config();
const express = require('express');
const server = require('./server');

const port = process.env.PORT

server.listen(4001, () =>{
console.log(`\n*****Listening on PORT ${port}*****\n`)
});