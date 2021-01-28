'use strict'




// exports.index = function (_req, res) {
//     helper.responseHTML('Hello Salam Kenal!...', res)
// }

// // Get data
// exports.getDataDiri = function (req, res) {
//     const reqBody = req.body
//     helper.response(reqBody, res)
// }

// // get
// exports.getDataLife = function (req, res) {
//     const reqNama = req.params.nama
//     const reqAlamat = req.params.kota
  
//     const restReq = "Nama "+reqNama +",saya tinggal di "+reqAlamat

//     console.log("result: ", restReq);
//     helper.responseHTML(restReq, res)
// }

// // insert data
// exports.insertUser = async function (req, res) {
//   const datas = req.body

//   console.log("result:", datas);
//   helper.responses(datas, res)
// }

// // insert data form
// exports.insertUserForm = function (req, res) {

//     const nama = req.body.nama
//     const alamat = req.body.alamat
//     const motivasiHidup = req.body.motivasi_hidup

//     const restReq = "Saya "+nama+", Motivasi hidup saya adalah "+motivasiHidup

//     console.log("result: ", restReq);
//     helper.responseHTML(restReq, res)
// }


const { author } = require("../db/models/author");
// const baseResponse = require("../helper/BaseResponse");

const baseResponse = require('../utils/helper')

class AuthorController {
  static async get(req, res) {
    // get data dari db
    const payload = await author.findAll();
    baseResponse({ message: "users retrieved", data: payload })(res);
    // res.json({
    //   success: true,
    //   message: "users retrieved",
    //   data: payload,
    // });
  }

  static async getById(req, res) {
    try {
      const payload = await user.findByPk(req.params.id);
      baseResponse({ message: "user retrieved", data: payload })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async delete(req, res) {
    const data = await user.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (data) {
      baseResponse({ message: "user deleted", data: payload })(res, 200);
    }
    baseResponse({ message: "user not found", data: payload })(res, 404);
  }
}

module.exports = AuthorController