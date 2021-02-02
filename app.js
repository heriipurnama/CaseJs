"use strict";

const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const routers = require("./src/router");
const notFound = require("./src/middleware/notFound");
const logMorgan = require("./src/middleware/logMorgan");
const errorHandler = require("./src/middleware/errorHandler");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", routers);
app.use(notFound); // middleware handling 404
app.use(logMorgan);

errorHandler.forEach((handler) => app.use(handler));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
