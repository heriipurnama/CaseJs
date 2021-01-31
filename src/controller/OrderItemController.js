'use strict'

let { order_item }= require('../db/models');
let baseResponse = require('../utils/helper');

let orderItems = order_item;

class OrderItemController {

  static async getAllDataOrderItems(req, res) {
    try {
        const datas = await orderItems.findAll();
        baseResponse({ message: "succes retrieved", data: datas })(res);
    } catch (error) {
        console.log(error);
    }
  }

  static async getOrderItemsById(req, res) {
    try {
      const datas = await orderItems.findByPk(req.params.id);
      baseResponse({ message: "succes retrieved", data: datas })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async createOrderItems(req, res) {
    // seq.
    try {
      const datas = await orderItems.create({
        order_id: req.body.orderId,
        product_id: req.body.productId
      });
      baseResponse({ message: "succes orderItems created", data: datas })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async updateOrderItems(req, res) {
    try {
        const datas = await orderItems.update({
          order_id: req.body.orderId,
          product_id: req.body.productId,
          updated_at : Date()
        },
        { where: { id: req.params.id } }
        );

        if (!datas) {
                baseResponse({ message: "orderItems not found", data: datas })( res, 404);
            }
                baseResponse({ message: "orderItems updated", data: datas })(res, 200);
    }
    catch(error) {
        console.log(error);
    }
  }


  static async deleteOrderItems(req, res) {
    try {
        const datas = await orderItems.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (datas) {
            baseResponse({ message: "orderItems deleted", data: datas })(res, 200);
        }
        baseResponse({ message: "orderItems not found", data: datas })(res, 404);
    }catch (error) {
        console.log(error);
    }
  }

}

module.exports = OrderItemController