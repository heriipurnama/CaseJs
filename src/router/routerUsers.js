"use strict";

const express = require("express");
const routers = express.Router();

const { user: UserController } = require("../controller");
const SchemaValidator = require("../middleware/SchemaValidator");

routers
  .route("/")
  .get(UserController.getAllDatas)

routers
  .route("/:id")
  .get(UserController.getById)
  .delete(UserController.deleteUser)
  .put(
    SchemaValidator.user(),
    SchemaValidator.validate,
    UserController.updateUser
  );

routers
    .route("/register")
    .post(
      SchemaValidator.user(),
      SchemaValidator.validate,
      UserController.createUser
    )

routers
    .route("/login/Auth")
    .post(UserController.login)

module.exports = routers;
