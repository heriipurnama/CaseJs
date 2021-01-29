'use strict'

module.exports = async function (app) {
  const books = require('../controller/BookController')

  app.get('/books',books.getAllDatas)
  app.get('/books/getById/:id',books.getById)
  app.post('/books',books.createBook)
  app.put('/books/getById/:id',books.updateBook)

  app.delete('/books/getById/:id',books.deleteBooks)



  app.get('/books/getBookAuthor/:id',books.getBookAuthor)
  app.get('/books/getAuthorPublisher/:id',books.getAuthorPublisher)
  app.get('/books/getBookSpesific',books.getBookSpesific)

}
