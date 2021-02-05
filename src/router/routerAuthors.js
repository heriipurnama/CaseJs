"use strict";

const express = require("express");
const routers = express.Router();
const multer = require("multer");

const { author: AuthorController } = require("../controller");
const storagePhotoAuthor = require("../middleware/uploadPhoto");
const imageFilter = require("../helpers/fileFilter");

const SchemaValidator = require("../middleware/SchemaValidator");

const Auth = require("../middleware/Auth");
const authorizeAdmin = require("../middleware/authorizeAdmin");
const authorizeUser = require("../middleware/authorizeUser");

const maxSize = 1 * 800 * 800; // for 800

const logger = (res, req, next) => {
  console.log("loggerRoutes");
  next();
};

const logger2 = (res, req, next) => {
  console.log("logger2Routes");
  next();
};

// app.use(logger)
// app.use(logger2)

routers
  .route("/")
  .get(Auth, AuthorController.getAllDatas)
  .post(
    Auth,
    SchemaValidator.author(),
    SchemaValidator.validate,
    AuthorController.createAuthor
  );

// cek 2 middleware run!
routers.route("/policy").get([logger, logger2], function (req, res) {
  res.send("Hello!");
});

routers
  .route("/:id")
  .get(Auth, AuthorController.getById)
  .put(
    Auth,
    SchemaValidator.author(),
    SchemaValidator.validate,
    AuthorController.updateAuthor
  )
  .delete(Auth,authorizeAdmin, AuthorController.deleteAuthors);

routers.route("/uploadPhoto/:id").put(
  Auth,
  multer({
    storage: storagePhotoAuthor,
    fileFilter: imageFilter,
    limits: { fileSize: maxSize },
  }).single("photo"),
  AuthorController.uploadPhoto
);

module.exports = routers;
