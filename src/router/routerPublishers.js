"use strict";

const express = require("express");
const routers = express.Router();

const { publisher: PublisherController } = require("../controller");
const SchemaValidator = require("../middleware/SchemaValidator");
const Auth = require("../middleware/Auth");
const authorizeAdmin = require("../middleware/authorizeAdmin");
const authorizeUser = require("../middleware/authorizeUser");

routers
  .route("/")
  .get(Auth, PublisherController.getAllDatas)
  .post(Auth,
    SchemaValidator.publisher(),
    SchemaValidator.validate,
    PublisherController.createPublisher
  );

routers
  .route("/:id")
  .get(Auth,PublisherController.getById)
  .delete(Auth,authorizeAdmin,PublisherController.deletePublisher)
  .put(Auth,
    SchemaValidator.publisher(),
    SchemaValidator.validate,
    PublisherController.updatePublisher
  );

// router.get("/", PublisherController.getAllDatas);
// router.get("/:id", PublisherController.getById);
// router.post("/", PublisherController.createPublisher);
// router.put("/:id", PublisherController.updatePublisher);

// router.delete("/:id", PublisherController.deletePublisher);

module.exports = routers;
