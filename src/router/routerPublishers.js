"use strict";

const express = require("express");
const routers = express.Router();

const { publisher: PublisherController } = require("../controller");
const { publisherValidationRules, validatePublisher } = require('../middleware/ValidatorPublisher')

routers
  .route("/")
  .get(PublisherController.getAllDatas)
  .post(publisherValidationRules(), validatePublisher, PublisherController.createPublisher);

routers
  .route("/:id")
  .get(PublisherController.getById)
  .delete(PublisherController.deletePublisher)
  .put(publisherValidationRules(), validatePublisher, PublisherController.updatePublisher);


// router.get("/", PublisherController.getAllDatas);
// router.get("/:id", PublisherController.getById);
// router.post("/", PublisherController.createPublisher);
// router.put("/:id", PublisherController.updatePublisher);

// router.delete("/:id", PublisherController.deletePublisher);


module.exports = routers;
