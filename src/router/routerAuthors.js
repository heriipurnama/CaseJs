"use strict";

const express = require("express");
const routers = express.Router();
const multer = require("multer");

const { author: AuthorController } = require("../controller");
const storagePhotoAuthor = require("../middleware/uploadPhoto");
const imageFilter = require("../helpers/fileFilter");

const maxSize = 1 * 800 * 800; // for 800

routers
  .route("/")
  .get(AuthorController.getAllDatas)
  .post(AuthorController.createAuthor);

routers
  .route("/:id")
  .get(AuthorController.getById)
  .put(AuthorController.updateAuthor)
  .delete(AuthorController.deleteAuthors);

routers
  .route("/uploadPhoto/:id")
  .put( multer({ storage: storagePhotoAuthor, fileFilter:imageFilter, limits: { fileSize: maxSize }})
       .single("photo"), AuthorController.uploadPhoto
   );
module.exports = routers;
