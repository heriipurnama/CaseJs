"use strict";

let { publisher } = require("../db/models");
let baseResponse = require("../helpers/response");

class PublisherController {
  static async getAllDatas(req, res) {
    try {
      const payload = await publisher.findAll();
      baseResponse({ message: "publishers retrieved", data: payload })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async getAllPublisher(req, res) {
    try {
      const payload = await publisher.findAll({
        include: "authors",
      });
      baseResponse({ message: "publishers retrieved", data: payload })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async getById(req, res) {
    try {
      const payload = await publisher.findByPk(req.params.id);
      baseResponse({ message: "publishers retrieved", data: payload })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async createPublisher(req, res) {
    // seq.
    try {
      const payload = await publisher.create({
        name: req.body.name,
        address: req.body.address,
        email: req.body.email,
        phone: req.body.phone,
        website: req.body.website,
      });
      baseResponse({ message: "publishers created", data: payload })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async updatePublisher(req, res) {
    try {
      const authorDetails = await publisher.update(
        {
          name: req.body.name,
          address: req.body.addres,
          email: req.body.email,
          phone: req.body.phone,
          website: req.body.website,
        },
        { where: { id: req.params.id } }
      );
      if (!authorDetails) {
        baseResponse({ message: "book not found", data: authorDetails })(
          res,
          404
        );
      }
      baseResponse({ message: "book updated", data: authorDetails })(res, 200);
    } catch (error) {
      console.log(error);
    }
  }

  static async deletePublisher(req, res) {
    try {
      const datas = await publisher.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (datas) {
        baseResponse({ message: "book deleted", data: datas })(res, 200);
      }
      baseResponse({ message: "book not found", data: datas })(res, 404);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = PublisherController;
