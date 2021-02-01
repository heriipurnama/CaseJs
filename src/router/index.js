`use stric`;
const express = require("express");
const routers = express.Router();

const author = require("./routerAuthors");
const book = require("./routerBooks");
const publisher = require("./routerPublishers");

// router
routers.use("/authors", author);
routers.use("/publishers", publisher);
routers.use("/books", book);

module.exports = routers;
