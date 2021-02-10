"use strict";

const express = require("express");
const routers = express.Router();

const { user: UserController } = require("../controller");
const SchemaValidator = require("../middleware/SchemaValidator");
const Auth = require("../middleware/Auth");
const authorizeAdmin = require("../middleware/authorizeAdmin");
const authorizeUser = require("../middleware/authorizeUser");

routers.route("/").get(Auth, authorizeAdmin, UserController.getAllDatas);

routers
  .route("/:id")
  .get(Auth, UserController.getById)
  .delete(Auth, authorizeAdmin,UserController.deleteUser)
  .put(
    Auth,
    authorizeAdmin,
    SchemaValidator.user(),
    SchemaValidator.validate,
    UserController.updateUser
  );

routers
  .route("/auth/signup")
  .post(
    SchemaValidator.user(),
    SchemaValidator.validate,
    UserController.createUser
  );

routers.route("/auth/signin").post(UserController.login);
routers.route("/auth/signout").get(UserController.signout);

routers.route("/auth/profile").get(Auth, UserController.profile);

module.exports = routers;
