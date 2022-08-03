const mysql = require('mysql')
db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'user',
  database: 'payment'
})



console.log("type de db:"+typeof(db));
console.log("detail de db:"+db);


tokenConf = {
  "secret": "(-è_àç - secret - 87392",
  "tokenLife": 900000,
}
module.exports = {
  db,
  tokenConf
}