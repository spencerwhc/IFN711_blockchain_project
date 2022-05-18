// Import libraries
const express = require('express');

// Initialise an Express router
const app = express.Router();

// health route
app.use('/health', require('./health'));

module.exports = app;
