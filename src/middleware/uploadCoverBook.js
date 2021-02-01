"use strict";

const { default: axios } = require("axios");
const multer = require("multer");
const path = require("path");
const routers = require("../router/routerAuthors");

const disk = multer.diskStorage({
  destination: path.join(__dirname, "./../../public/upload/books"),
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    callback(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
  },
});

module.exports = disk;

// make changge midleware = controller

// // handling error raja ongkir
// const checkOngkir = async () => {
//   data = {
//     origin: "501",
//     destination: "114",
//     weight: 900,
//     courier: "jne",
//   };
//   return await axios.post("", data, {
//     headers: {
//       key: "",
//     },
//   });
// };

// routers.post("/checkOngkir", async (req, res) => {
//   const res = await checkOngkir();
//   res.json(result.data);
// });

// api.rajaongkir.com/starter/cost
