"use strict";

const express = require("express");
const routers = express.Router();
const multer = require("multer");

const { book: BookController } = require("../controller");
const storageCoverBook = require("../middleware/uploadCoverBook");
const imageFilter = require("../helpers/fileFilter");
const SchemaValidator = require("../middleware/SchemaValidator");
const Auth = require("../middleware/Auth");
const authorizeAdmin = require("../middleware/authorizeAdmin");
const authorizeUser = require("../middleware/authorizeUser");

const maxSize = 1 * 800 * 800; // for 800

routers
  .route("/")
  .get(Auth,BookController.getAllDatas)
  .post(Auth,
    SchemaValidator.book(),
    SchemaValidator.validate,
    BookController.createBook
  );

routers
  .route("/:id")
  .get(Auth,BookController.getById)
  .delete(Auth,authorizeAdmin,BookController.deleteBooks)
  .put(Auth,
    SchemaValidator.book(),
    SchemaValidator.validate,
    BookController.updateBook
  );

routers.route("/bookAuthor/:id").get(Auth,BookController.getBookAuthor);

routers.route("/authorPublisher/:id").get(Auth,BookController.getAuthorPublisher);

routers.route("/bookSpesific").get(Auth,BookController.getBookSpesific);

routers.route("/uploadBook/:id").put(Auth,
  multer({
    storage: storageCoverBook,
    fileFilter: imageFilter,
    limits: { fileSize: maxSize },
  }).single("photo"),
  BookController.uploadCover
);

module.exports = routers;
