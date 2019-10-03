const mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'thankyou',
  database : 'movielist'
});
 
connection.connect(() => {
    console.log("successfully connected to database")
});

module.exports = connection;