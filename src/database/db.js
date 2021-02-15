const mysql = require('mysql')
const pool = mysql.createPool({
  host: '',
  port: '',
  user: '',
  password: '',
  database: ''
})

var query = function (sql, callback) {
  pool.getConnection(function(err,conn){
    if(err){
      callback(err, null, null)
    } else {
      conn.query(sql, function(q_err, values, fields){
        pool.releaseConnection(conn)
        callback(q_err, values, fields)
      })
    }
  })
}

module.exports = {
  pool,
  query,
}
