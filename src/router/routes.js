'use strict'

module.exports = async function (app) {
  const users = require('../controller/controller')

  // user
  app.route('/').get(users.index)
  app.route('/datadiri').get(users.getDataDiri)
  app.route('/datadiri/:nama/:kota').get(users.getDataLife)
  app.route('/datadiri/insertUser').post(users.insertUser)
  app.route('/datadiri/insertUserForm').post(users.insertUserForm)
}
