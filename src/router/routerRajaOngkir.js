"use strict";

const express = require("express");
const routers = express.Router();

const { rajaOngkir: RajaOngkirController } = require("../controller");

routers
    .route("/checkongkir/cost")
    .post(RajaOngkirController.getDataCost)


routers
    .route("/checkongkir/city")
    .post(RajaOngkirController.getDataCity)


routers
    .route("/checkongkir/province")
    .post(RajaOngkirController.getDataprovince)

module.exports = routers;
