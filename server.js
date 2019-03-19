// Main Server file. Largely boilerplate from previous assignments/classwork
const express = require("express");

let PORT = process.env.PORT || 8080;

let app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Handlebars
let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaulLayout: "main"}));
app.set("view engine", "handlebars");

// Routes


// Kick the whole thing off
app.listen(PORT, function() {
    console.log("Server running on LOCALHOST: " + PORT);
});