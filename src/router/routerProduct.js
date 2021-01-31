'use strict'

module.exports = async function (app) {
  const products = require('../controller/ProductController')

  app.get('/products',products.getAllDataProducts)
  app.get('/products/getProductsById/:id',products.getProductsById)
  app.post('/products/addNewProducts',products.createProducts)
  app.put('/products/updateProducts/:id',products.updateProducts)

  app.delete('/products/deleteProducts/:id',products.deleteProducts)

}
