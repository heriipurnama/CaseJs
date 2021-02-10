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
  },
  "production" : {
    "username" : process.env.DBUSER_PROD,
    "password" : process.env.DBPASSWORD_PROD,
    "database" : process.env.DBNAME_PROD,
    "host" : process.env.DBHOST_PROD,
    "dialect" : process.env.DBDIALECT_PROD, // untuk default port 5432
    "port" : process.env.DBPORT_PROD, // untuk custom port
    "logging": false,
    "dialectOptions": {
      ssl:  {
        require: true,
        rejectUnauthorized: false
    }
    }
  }
}
