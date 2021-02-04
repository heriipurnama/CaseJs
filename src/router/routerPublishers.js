"use strict";

const express = require("express");
const routers = express.Router();

const { publisher: PublisherController } = require("../controller");
const SchemaValidator = require("../middleware/SchemaValidator");

routers
  .route("/")
  .get(PublisherController.getAllDatas)
  .post(
    SchemaValidator.publisher,
    SchemaValidator.validate,
    PublisherController.createPublisher
  );

routers
  .route("/:id")
  .get(PublisherController.getById)
  .delete(PublisherController.deletePublisher)
  .put(
    SchemaValidator.publisher,
    SchemaValidator.validate,
    PublisherController.updatePublisher
  );

// router.get("/", PublisherController.getAllDatas);
// router.get("/:id", PublisherController.getById);
// router.post("/", PublisherController.createPublisher);
// router.put("/:id", PublisherController.updatePublisher);

// router.delete("/:id", PublisherController.deletePublisher);

module.exports = routers;
