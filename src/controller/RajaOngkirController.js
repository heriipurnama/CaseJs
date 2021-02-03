"use strict";
require("dotenv").config();

const axios = require("axios").default;
let baseResponse = require("../helpers/responseAPIExt");
const APIKey = process.env.APIKEYRAJAONGKIR;
const urlAPI = process.env.APIRAJAONGKIR;

class RajaOngkirController {
  static async getDataCost(req, res, next) {
    try {
      const data = await axios.post(urlAPI + "cost", req.body, {
        headers: {
          key: APIKey,
        },
      });
      baseResponse({ message: "data retrieved", data: data.data })(res);
    } catch (error) {
      res.status(400);
      next(error);
    }
  }

  static async getDataCity(req, res, next) {
    try {
      const data = await axios.post(urlAPI + "city", req.body, {
        headers: {
          key: APIKey,
        },
      });
      baseResponse({ message: "data retrieved", data: data.data })(res);
    } catch (error) {
      res.status(400);
      next(error);
    }
  }

  static async getDataprovince(req, res, next) {
    try {
      const data = await axios.post(urlAPI + "province", req.body, {
        headers: {
          key: APIKey,
        },
      });
      baseResponse({ message: "data retrieved", data: data.data })(res);
    } catch (err) {
      res.status(400);
      next(err);
    }
  }
}

function err(error, res) {
  let errorBody = error.response.data.rajaongkir.status;
  const result = {
    status: "succes",
    error: errorBody.code,
    message: errorBody.description,
    stack: error.stack,
  };
  return res.status(errorBody.code).json(result);
}
module.exports = RajaOngkirController;
