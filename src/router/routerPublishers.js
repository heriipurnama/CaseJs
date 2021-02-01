"use strict";

const express = require("express");
const router = express.Router();

const { publisher: PublisherController } = require("../controller");

router.get("/", PublisherController.getAllDatas);
router.get("/:id", PublisherController.getById);
router.post("/", PublisherController.createPublisher);
router.put("/:id", PublisherController.updatePublisher);

router.delete("/:id", PublisherController.deletePublisher);

module.exports = router;
