const mysql = require('mysql');
var pool = mysql.createPool({
    'user': 'root',
    'password':'1234',
    'database': 'vai ser um banco que vamos criar',
    'host':'localhost',
    'port': '3306'
});

exports.pool = pool;