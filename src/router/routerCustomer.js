'use strict'

module.exports = async function (app) {
  const customers = require('../controller/CustomerController')

  app.get('/customers',customers.getAllDataCustomers)
  app.get('/customers/getCustomerById/:id',customers.getCustomerById)
  app.post('/customers/addNewCustomer',customers.createCustomers)
  app.put('/customers/updateCustomer/:id',customers.updateCustomers)

  app.delete('/customers/deleteCustomer/:id',customers.deleteCustomers)

  //customer udate status order
  app.put('/customers/updateStatusOrderCustomer',customers.updateStatusOrderCustomers)
}
