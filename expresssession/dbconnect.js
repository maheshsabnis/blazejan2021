const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'P@ssw0rd_',
    database: 'Company'
});

connection.connect((error)=>{
    if(error){
        console.log(`Error Occured in Connection ${error}`);
    } else {
        console.log(`Db Connected`);
    }
});

module.exports = connection;