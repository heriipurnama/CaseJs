"use strict";
require('dotenv').config()

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
      res.status(403);
      next(err);
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
      res.status(403);
      next(err);
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
    } catch (error) {
      res.status(403);
      next(err);
    }
  }
}

function err(error, res) {
    let _err = error.response.data.rajaongkir.status;
   const result = { status:"succes", error: _err.code, message: _err.description, stack:error.stack }
   return res.status(_err.code).json(result);
  
}
module.exports = RajaOngkirController;
