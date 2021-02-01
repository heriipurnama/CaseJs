"use strict";

const express = require("express");
const routers = express.Router();

const { author: AuthorController } = require("../controller");

routers
  .route("/")
  .get(AuthorController.getAllDatas)
  .post(AuthorController.createAuthor);

routers
  .route("/:id")
  .get(AuthorController.getById)
  .put(AuthorController.updateAuthor)
  .delete(AuthorController.deleteAuthors);

// router.get("/", AuthorController.getAllDatas);
// router.get("/:id", AuthorController.getById);
// router.post("/", AuthorController.createAuthor)
// router.put("/:id", AuthorController.updateAuthor);
// router.delete("/:id", AuthorController.deleteAuthors);

module.exports = routers;
