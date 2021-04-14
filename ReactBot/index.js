// Entry point for our backend app

//import express from 'express';
const express = require('express')
const app = express();

// Home page - send object response {"Hello":"There"}
app.get('/', (req, res) =>{
    res.send({'Hello':'There'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);