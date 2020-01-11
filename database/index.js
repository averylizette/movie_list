const mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'FILL ME IN',
  database : 'movielist'
});
 
connection.connect(() => {
    console.log("successfully connected to database")
});

module.exports = connection;