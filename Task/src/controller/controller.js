'use strict'

const helper = require('../utils/helper')

exports.index = function (_req, res) {
    helper.responseHTML('Hello Salam Kenal!...', res)
}

// Get data
exports.getDataDiri = function (req, res) {
    const reqBody = req.body
    helper.response(reqBody, res)
}

// get
exports.getDataLife = function (req, res) {
    const reqNama = req.params.nama
    const reqAlamat = req.params.kota
  
    const restReq = "Nama "+reqNama +",saya tinggal di "+reqAlamat

    console.log("result: ", restReq);
    helper.responseHTML(restReq, res)
}

// insert data
exports.insertUser = async function (req, res) {
  const datas = req.body

  console.log("result:", datas);
  helper.responses(datas, res)
}

// insert data form
exports.insertUserForm = function (req, res) {

console.log(req.body.nama);

const nama = req.body.nama
const alamat = req.body.alamat
const motivasiHidup = req.body.motivasi_hidup

const restReq = "Saya "+nama+", Motivasi hidup saya adalah "+motivasiHidup

console.log("result: ", restReq);
helper.responseHTML(restReq, res)

}
