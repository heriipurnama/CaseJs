"use strict";

const { default: axios } = require("axios");
const multer = require("multer");
const path = require("path");

const disk = multer.diskStorage({
  destination: path.join(__dirname, "./../../public/upload/authors"),
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    callback(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
  },
});

module.exports = disk;
