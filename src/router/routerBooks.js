"use strict";

const express = require("express");
const router = express.Router();

const { book: BookController } = require("../controller");
// const routers = require("./routerAuthors");
const uploadPhoto = require("../midllewares/upload-photo");
const multer = require("multer");

router.get("/", BookController.getAllDatas);
router.get("/:id", BookController.getById);
router.post("/", BookController.createBook);
//router.put("/:id", BookController.updateBook);

router.delete("/:id", BookController.deleteBooks);

router.get("/bookAuthor/:id", BookController.getBookAuthor);
router.get("/authorPublisher/:id", BookController.getAuthorPublisher);
router.get("/bookSpesific", BookController.getBookSpesific);

router.put(
  "/uploadBook/:id",
  multer({ storage: uploadPhoto }).single("photo"),
  BookController.uploadCover
);

module.exports = router;

// via 