"use strict";
const path = require("path");

const { author } = require("../db/models");
const baseResponse = require("../helpers/response");
const SetRedis = require("../helpers/SetRedis");
const authCloudinary = require("../middleware/AuthCloudinary");

const cloudinary = require("cloudinary").v2;
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARYCLOUDNAME,
  api_key: process.env.CLOUDINARYAPIKEY,
  api_secret: process.env.CLOUDINARYAPISECRET
});

class AuthorController {
  static async getAllDatas(req, res, next) {
    try {
      const payload = await author.findAll();
      //   SetRedis(req, payload);
      //  res.json(datas);
      baseResponse({
        message: "authors retrieved",
        data: payload,
      })(res);
      SetRedis(req, payload);
      //  res.json(datas);
      //   console.log('datas', datas);
    } catch (err) {
      res.status(400);
      next(err);
    }
  }

  static async getById(req, res, next) {
    try {
      const payload = await author.findByPk(req.params.id);
      baseResponse({ message: "authors retrieved", data: payload })(res);
    } catch (error) {
      res.status(400);
      next(error);
    }
  }

  static async createAuthor(req, res, next) {
    // seq.
    try {
      const payload = await author.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
      });
      baseResponse({ message: "authors created", data: payload })(res);
    } catch (error) {
      res.status(400);
      next(error);
    }
  }

  static async updateAuthor(req, res, next) {
    try {
      const authorDetails = await author.update(
        {
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
        },
        { where: { id: req.params.id } }
      );
      if (!authorDetails) {
        baseResponse({ message: "author not found", data: authorDetails })(
          res,
          404
        );
      }
      baseResponse({ message: "author updated", data: authorDetails })(
        res,
        200
      );
    } catch (error) {
      res.status(400);
      next(error);
    }
  }

  static async deleteAuthors(req, res, next) {
    try {
      const datas = await author.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (datas) {
        baseResponse({ message: "author deleted", data: datas })(res, 200);
      }
      baseResponse({ message: "author not found", data: datas })(res, 404);
    } catch (error) {
      res.status(400);
      next(error);
    }
  }

  static async uploadPhoto(req, res, next) {
    try {
      let path = "public/upload/authors/";
      let fileName = req.file.filename;
      let resultPathFileName = path + fileName;

      cloudinary.uploader
        .upload(resultPathFileName)
        .then(async (result) => {
          const datas = await author.update(
            {
              photo: result.url,
            },
            { where: { id: req.params.id } }
          );
        });
    } catch (error) {
      res.status(400);
      next(error);
    }
    return baseResponse({ message: "photo upload succes" })(res, 200);
  }
}

module.exports = AuthorController;
