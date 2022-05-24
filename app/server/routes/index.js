// Import libraries
const express = require("express");

// Initialise an Express router
const app = express.Router();

// health route
app.use("/health", require("./health"));

// report route
app.use("/report", require("./report"));

// student route
app.use("/student", require("./student"));

module.exports = app;
