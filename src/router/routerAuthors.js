"use strict";

const express = require("express");
const routers = express.Router();
const multer = require("multer");

const { author: AuthorController } = require("../controller");
const storagePhotoAuthor = require("../middleware/uploadPhoto");
const imageFilter = require("../helpers/fileFilter");
const { route } = require("./routerBooks");

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
  .get([logger, logger2], AuthorController.getAllDatas)
  .post(AuthorController.createAuthor);

routers.route("/policy").get([logger, logger2], function (req, res) {
  res.send("Hello!");
});

routers
  .route("/:id")
  .get(AuthorController.getById)
  .put(AuthorController.updateAuthor)
  .delete(AuthorController.deleteAuthors);

routers
  .route("/uploadPhoto/:id")
  .put(
    multer({
      storage: storagePhotoAuthor,
      fileFilter: imageFilter,
      limits: { fileSize: maxSize },
    }).single("photo"),
    AuthorController.uploadPhoto
  );
module.exports = routers;
