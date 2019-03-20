// Controller file for Burger App routes
// *********************************************
// Bring in Express and create a variable for it
// Technically this should be burgers_controller.js, but I decided to "spice" up the name
const express = require("express");
const router = express.Router();

// TODO: Burger model(Inspired by MVC assignment) 
const burger = require("../models/burger.js");

//ROUTES!


// Export for use elsewhere
module.exports = router;
