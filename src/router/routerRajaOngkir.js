"use strict";

const express = require("express");
const routers = express.Router();

const { rajaOngkir: RajaOngkirController } = require("../controller");
const Auth = require("../middleware/Auth");
const authorizeAdmin = require("../middleware/authorizeAdmin");

routers
    .route(Auth, "/checkongkir/cost")
    .post(RajaOngkirController.getDataCost)


routers
    .route(Auth, "/checkongkir/city")
    .post(RajaOngkirController.getDataCity)


routers
    .route(Auth, "/checkongkir/province")
    .post(RajaOngkirController.getDataprovince)

module.exports = routers;
