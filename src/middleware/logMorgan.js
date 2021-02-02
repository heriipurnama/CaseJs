"use strict";

const morgan = require("morgan");
const path = require("path");
const fs = require("fs");

// create a write stream (in append mode).
const accessLogStream = fs.createWriteStream(
  path.join("tmp/dayli-log.log"),
  { flags: "a" }
);

// setup the logger.
const logger = morgan("common", { stream: accessLogStream });

module.exports = logger;
