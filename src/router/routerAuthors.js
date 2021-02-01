"use strict";

const express = require("express");
const router = express.Router();

const { author: AuthorController } = require("../controller");

router.get("/", AuthorController.getAllDatas);
router.get("/:id", AuthorController.getById);
router.post("/", AuthorController.createAuthor);
router.put("/:id", AuthorController.updateAuthor);

router.delete("/:id", AuthorController.deleteAuthors);

module.exports = router;
