'use strict'

module.exports = async function (app) {
  const orderItems = require('../controller/OrderItemController')

  app.get('/orderItems',orderItems.getAllDataOrderItems)
  app.get('/orderItems/getOrdersById/:id',orderItems.getOrderItemsById)
  app.post('/orderItems/addNewOrders',orderItems.createOrderItems)
  app.put('/orderItems/updateOrders/:id',orderItems.updateOrderItems)

  app.delete('/orderItems/deleteOrders/:id',orderItems.deleteOrderItems)

}
