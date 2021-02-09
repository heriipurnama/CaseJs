"use sctrict";

const cloudinary = require("cloudinary").v2;
require("dotenv").config();

module.exports = cloudinary.config({
  cloud_name: process.env.CLOUDINARYCLOUDNAME,
  api_key: process.env.CLOUDINARYAPIKEY,
  api_secret: process.env.CLOUDINARYAPISECRET,
});
