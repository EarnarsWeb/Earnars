const mysql = require('mysql')

 const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Kingsley369",
    database:"betProject"

})
module.exports = {db}