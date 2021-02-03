"use strict";

const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 4000;

const routers = require("./src/router");
const notFound = require("./src/middleware/notFound");
const logMorgan = require("./src/middleware/logMorgan");
const errorHandler = require("./src/middleware/errorHandler");

const loggerMiddleware = require("./src/middleware/logger");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const logger = (res, req, next) => {
 // console.log("logger");
  next()
}

const logger2 = (res, req, next) => {
 // console.log("logger2");
  next()
}

// app.use(logger)
// app.use(logger2)


app.use(cors());
// app.use(logMorgan);
// app.use(loggerMiddleware);
app.use("/api/v1", routers);

// app.use(notFound); // middleware handling 404

errorHandler.forEach((handler) => app.use(handler));


app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
