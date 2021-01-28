'use strict'

module.exports = async function (app) {
  const users = require('../controller/AuthorController')

  // user
  app.route('/').get(users.get)
  app.route('/datadiri').get(users.get)
  app.route('/datadiri/:nama/:kota').get(users.getDataLife)
  app.route('/datadiri/insertUser').post(users.insertUser)
  app.route('/datadiri/insertUserForm').post(users.insertUserForm)
}
