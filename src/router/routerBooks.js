'use strict'

module.exports = async function (app) {
  const books = require('../controller/BookController')

  app.get('/books',books.getAllDatas)
  app.get('/booksRelation',books.getAllBook)
  app.get('/books/getById/:id',books.getById)
  app.post('/books',books.createBook)
  app.put('/books/getById/:id',books.updateBook)

  app.delete('/books/getById/:id',books.deleteBooks)

}
