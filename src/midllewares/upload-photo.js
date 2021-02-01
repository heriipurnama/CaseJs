'use strict'

const { default: axios } = require("axios")
const multer = require("multer")
const path = require("path")
const { callbackify } = require("util")
const routers = require("../router/routerAuthors")


const disk = multer.diskStorage({
    destination : path.join(__dirname, "./../../public/upload"),
    filename : (req, file, callback) => {
        console.log("d",file);
        callback(null, file.originalname)
    }
})

module.exports = disk

// make changge midleware = controller


// handling error raja ongkir
const checkOngkir = async () => {
    data = {
        origin: "501",
        destination: "114",
        weight: 900,
        courier:"jne"
    }
    return await axios.post("", data, {
        headers : {
            key:""
        }
    })
}

routers.post("/checkOngkir", async(req,res)=> {
    const res = await checkOngkir()
    res.json(result.data);
})

// api.rajaongkir.com/starter/cost