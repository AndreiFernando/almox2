const mysql = require('mysql');
const db = mysql.createConnection({
    host: '177.73.238.249',
    user: 'transfer_almox',
    password: 'S3nac@2023',
    database: 'transfer_almox'
});

db.connect(function(err) {
    if(err) throw err;
    console.log('Conectou');
});

module.exports = db;