'use strict'

module.exports = async function (app) {
  const publishers = require('../controller/PublisherController')

  app.get('/publishers', publishers.getAllDatas)
  app.get('/publishers/getById/:id', publishers.getById)
  app.post('/publishers', publishers.createPublisher)
  app.put('/publishers/getById/:id', publishers.updatePublisher)

  app.delete('/publishers/getById/:id', publishers.deletePublisher)

}
