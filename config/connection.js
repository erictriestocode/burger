// Connection file as described in Readme
// Still would like a public facing SQL server so I can develop from anywhere
// Attempting to use const and let instead of var
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "appuser",
    password: "password",
    database: "burgers_db"
});

// MVC example connection code
connection.connect(function(err){
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;