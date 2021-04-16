// Entry point for our backend app

//import express from 'express';
const express = require('express')
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
// To add route to express app, pass the app variable to routes file
require('./routes/diagFlowRoutes')(app)


const PORT = process.env.PORT || 5000;
app.listen(PORT);