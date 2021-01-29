'use strict'

module.exports = async function (app) {
  const authors = require('../controller/AuthorController')

  app.get('/authors',authors.getAllDatas)
  app.get('/authors/getById/:id',authors.getById)
  app.post('/authors',authors.createAuthor)
  app.put('/authors/getById/:id',authors.updateAuthor)

  app.delete('/authors/getById/:id',authors.deleteAuthors)

}
