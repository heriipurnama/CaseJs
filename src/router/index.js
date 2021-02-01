`use stric`;
const express = require("express");
const routers = express.Router();

const author = require("./routerAuthors");
const book = require("./routerBooks");
const publisher = require("./routerPublishers");
const rajaOngkir = require("./routerRajaOngkir");

// router
routers.use("/authors", author);
routers.use("/publishers", publisher);
routers.use("/books", book);
routers.use("/users", rajaOngkir);

module.exports = routers;
