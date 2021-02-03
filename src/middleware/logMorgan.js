"use strict";

const morgan = require("morgan");
const path = require("path");
const fs = require("fs");

// create a write stream (in append mode).
const d = new Date();
const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);

const result = `${da}-${mo}-${ye}`;


const accessLogStream = fs.createWriteStream(
  path.join(`tmp/${result}.log`),
  { flags: "a" }
);

// setup the logger.
const logger = morgan("common", { stream: accessLogStream });

module.exports = logger;
