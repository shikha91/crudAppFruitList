const mysql = require('mysql2');
//MySQL details
var mysqlConnection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    port     : '3307',
    password : 'admin123',
    database : 'test'
});
mysqlConnection.connect((err)=> {
        if(!err)
        console.log('Connection Established Successfully');
        else
        console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
});
module.exports = mysqlConnection;