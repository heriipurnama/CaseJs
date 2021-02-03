require('dotenv').config()

module.exports = {
  "development" : {
    "username" : process.env.DBUSER,
    "password" : process.env.DBPASSWORD,
    "database" : process.env.DBNAME,
    "host" : process.env.DBHOST,
    "dialect" : process.env.DBDIALECT, // untuk default port 5432
    "port" : process.env.DBPORT, // untuk custom port
    "logging": false
  }
}
