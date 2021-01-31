'use strict'

let { customer, order }= require('../db/models'); 
let baseResponse = require('../utils/helper')

class CustomerController {

  static async getAllDataCustomers(req, res) {
    try {
        const datas = await customer.findAll();
        baseResponse({ message: "succes retrieved", data: datas })(res);
    } catch (error) {
        console.log(error);
    }
  }

  static async getCustomerById(req, res) {
    try {
      const datas = await customer.findByPk(req.params.id);
      baseResponse({ message: "succes retrieved", data: datas })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async createCustomers(req, res) {
    // map. data
    let datas = req.body.data;

    let fullName = datas.attributes.fullName
    let username = datas.attributes.username
    let email = datas.attributes.email
    let phoneNumber = datas.attributes.phoneNumber

    try {
      const datas = await customer.create({
        full_name: fullName,
        username: username,
        email: email,
        phone_number: phoneNumber
      });
      baseResponse({ message: "succes customer created", data: datas })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async updateCustomers(req, res) {
    try {
        const datas = await customer.update({
          full_name: req.body.fullName,
          username: req.body.username,
          email: req.body.email,
          phone_number: req.body.phoneNumber,
          updated_at : Date()
        },
        { where: { id: req.params.id } }
        );

        if (!datas) {
                baseResponse({ message: "customer not found", data: datas })( res, 404);
            }
                baseResponse({ message: "customer updated", data: datas })(res, 200);
    }
    catch(error) {
        console.log(error);
    }
  }

  // update status order
  static async updateStatusOrderCustomers(req, res) {

    const getKey = req.body.data.attributes;
    const getValue = req.body.data.status;
    const customerId = getKey.customerId;
    const orderId = getKey.orderId;

    const setStatus = { status: getValue };
    const resWhere = { customer_id: customerId, id: orderId };

    try {
        const datas = await order.update(setStatus,
        { where: resWhere }
        );

        if (!datas) {
                baseResponse({ message: "order not found", data: datas })( res, 404);
            }
                baseResponse({ message: "customer updated order", data: datas })(res, 200);
    }
    catch(error) {
        console.log(error);
    }

  }

  static async deleteCustomers(req, res) {
    try {
        const datas = await customer.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (datas) {
            baseResponse({ message: "customer deleted", data: datas })(res, 200);
        }
        baseResponse({ message: "customer not found", data: datas })(res, 404);
    }catch (error) {
        console.log(error);
    }
  }

}

module.exports = CustomerController