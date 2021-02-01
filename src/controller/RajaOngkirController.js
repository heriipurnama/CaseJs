"use strict";

const axios = require("axios").default;
let baseResponse = require("../helpers/responseAPIExt");

const urlAPI = "https://api.rajaongkir.com/starter/";
const APIKey = "aee3827cb11c597a95cc9b084e0c3852";

class RajaOngkirController {
  static async getDataCost(req, res) {
    try {
      const data = await axios.post(urlAPI + "cost", req.body, {
        headers: {
          key: APIKey,
        },
      });
      baseResponse({ message: "data retrieved", data: data.data })(res);
    } catch (error) {
      baseResponse({ message: "Erorr", data: error })(res, 400);
    }
  }

  static async getDataCity(req, res) {
    try {
      const data = await axios.post(urlAPI + "city", req.body, {
        headers: {
          key: APIKey,
        },
      });
      baseResponse({ message: "data retrieved", data: data.data })(res);
    } catch (error) {
        baseResponse({ message: "Erorr", data: error })(res, 400);
    }
  }

  static async getDataprovince(req, res) {
    try {
      const data = await axios.post(urlAPI + "province", req.body, {
        headers: {
          key: APIKey,
        },
      });
      baseResponse({ message: "data retrieved", data: data.data })(res);
    } catch (error) {
        baseResponse({ message: "Erorr", data: error })(res, 400);
    }
  }
}

module.exports = RajaOngkirController;
