'use strict'

let { product }= require('../db/models'); 
let baseResponse = require('../utils/helper')

class ProductController {

  static async getAllDataProducts(req, res) {
    try {
        const datas = await product.findAll();
        baseResponse({ message: "succes retrieved", data: datas })(res);
    } catch (error) {
        console.log(error);
    }
  }

  static async getProductsById(req, res) {
    try {
      const datas = await product.findByPk(req.params.id);
      baseResponse({ message: "succes retrieved", data: datas })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async createProducts(req, res) {
    // seq.
    try {
      const datas = await product.create({
        name: req.body.name,
        price: req.body.price
      });
      baseResponse({ message: "succes product created", data: datas })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async updateProducts(req, res) {
    try {
        const datas = await product.update({
          name: req.body.name,
          price: req.body.price,
          updated_at : Date()
        },
        { where: { id: req.params.id } }
        );

        if (!datas) {
                baseResponse({ message: "product not found", data: datas })( res, 404);
            }
                baseResponse({ message: "product updated", data: datas })(res, 200);
    }
    catch(error) {
        console.log(error);
    }
  }


  static async deleteProducts(req, res) {
    try {
        const datas = await product.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (datas) {
            baseResponse({ message: "product deleted", data: datas })(res, 200);
        }
        baseResponse({ message: "product not found", data: datas })(res, 404);
    }catch (error) {
        console.log(error);
    }
  }

}

module.exports = ProductController