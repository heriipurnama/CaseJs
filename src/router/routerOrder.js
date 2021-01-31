'use strict'

module.exports = async function (app) {
  const orders = require('../controller/OrderController')

  app.get('/orders',orders.getAllDataOrders)
  app.get('/orders/getOrdersById/:id',orders.getOrdersById)
  app.post('/orders/addNewOrders',orders.createOrders)
  app.put('/orders/updateOrders/:id',orders.updateOrders)

  app.delete('/orders/deleteOrders/:id',orders.deleteOrders)

}
