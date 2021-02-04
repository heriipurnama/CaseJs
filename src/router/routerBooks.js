"use strict";

const express = require("express");
const routers = express.Router();
const multer = require("multer");

const { book: BookController } = require("../controller");
const storageCoverBook = require("../middleware/uploadCoverBook");
const imageFilter = require("../helpers/fileFilter");
const SchemaValidator = require("../middleware/SchemaValidator");

const maxSize = 1 * 800 * 800; // for 800

routers
  .route("/")
  .get(BookController.getAllDatas)
  .post(
    SchemaValidator.book(),
    SchemaValidator.validate,
    BookController.createBook
  );

routers
  .route("/:id")
  .get(BookController.getById)
  .delete(BookController.deleteBooks)
  .put(
    SchemaValidator.book(),
    SchemaValidator.validate,
    BookController.updateBook
  );

routers.route("/bookAuthor/:id").get(BookController.getBookAuthor);

routers.route("/authorPublisher/:id").get(BookController.getAuthorPublisher);

routers.route("/bookSpesific").get(BookController.getBookSpesific);

routers.route("/uploadBook/:id").put(
  multer({
    storage: storageCoverBook,
    fileFilter: imageFilter,
    limits: { fileSize: maxSize },
  }).single("photo"),
  BookController.uploadCover
);

module.exports = routers;
