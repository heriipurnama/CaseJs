'use strict'

let { order, order_item }= require('../db/models'); 
let baseResponse = require('../utils/helper')

let orderItems = order_item;

class OrderController {

  static async getAllDataOrders(req, res) {
    try {
        const datas = await order.findAll();
        baseResponse({ message: "succes retrieved", data: datas })(res);
    } catch (error) {
        console.log(error);
    }
  }

  static async getOrdersById(req, res) {
    try {
      const datas = await order.findByPk(req.params.id);
      baseResponse({ message: "succes retrieved", data: datas })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async createOrders(req, res) {
    // seq.

    try {
      const status = "accept"; //default accept
      let dataOrder = req.body.data.attributes;

      let setDataOrder = { 
        customer_id: dataOrder.customerId,
        status: status,
        driver_id: dataOrder.driverId
      }

      let setOrderItems = dataOrder.order_detail;

      const getDataOrder  = await createOrder(setDataOrder) //insert data order
      let getIdOrder = JSON.stringify(getDataOrder);
      let restConvert = JSON.parse(getIdOrder);

      let resSetOrderDetail = setOrderItems.map(setOrderItem => ({...setOrderItem, order_id:restConvert.id})) // push value order_id insert to order_detail
      const inserOrderDetail = await orderItems.bulkCreate(resSetOrderDetail); //insert detail order by order_id

      baseResponse({ message: "succes order created", data: { "InsertDataOrder":getDataOrder, "inserOrderDetail": inserOrderDetail} })(res);
    
    } catch (error) {
      console.log(error);
    }

  }

  static async updateOrders(req, res) {
    try {
        const datas = await order.update({
          customer_id: req.body.customerId,
          status: req.body.status,
          driver_id: req.body.driverId,
          updated_at : Date()
        },
        { where: { id: req.params.id } }
        );

        if (!datas) {
                baseResponse({ message: "order not found", data: datas })( res, 404);
            }
                baseResponse({ message: "order updated", data: datas })(res, 200);
    }
    catch(error) {
        console.log(error);
    }
  }


  static async deleteOrders(req, res) {
    try {
        const datas = await order.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (datas) {
            baseResponse({ message: "order deleted", data: datas })(res, 200);
        }
        baseResponse({ message: "order not found", data: datas })(res, 404);
    }catch (error) {
        console.log(error);
    }
  }

}

 // global function

 function createOrder(setDataOrder) {
  const datas = order.create(setDataOrder)
  //console.log('datasoOrderCreate', datas);
  return datas;
}

module.exports = OrderController