'use strict'

let { driver, order }= require('../db/models'); 
let baseResponse = require('../utils/helper')

class DriverController {

  static async getAllDataDrivers(req, res) {
    try {
        const datas = await driver.findAll();
        baseResponse({ message: "succes retrieved", data: datas })(res);
    } catch (error) {
        console.log(error);
    }
  }

  static async getDriversById(req, res) {
    try {
      const datas = await driver.findByPk(req.params.id);
      baseResponse({ message: "succes retrieved", data: datas })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async createDrivers(req, res) {
    // map. data
    let datas = req.body.data;

    let fullName = datas.attributes.fullName
    let phoneNumber = datas.attributes.phoneNumber

    try {
      const datas = await driver.create({
        full_name: fullName,
        phone_number: phoneNumber
      });
      baseResponse({ message: "succes driver created", data: datas })(res);
    } catch (error) {
      console.log(error);
    }
  }

  // only update fullName
  static async updateDrivers(req, res) {
    try {
        const datas = await driver.update({
          full_name: req.body.fullName,
          updated_at : Date()
        },
        { where: { id: req.params.id } }
        );

        if (!datas) {
                baseResponse({ message: "driver not found", data: datas })( res, 404);
            }
                baseResponse({ message: "driver updated", data: datas })(res, 200);
    }
    catch(error) {
        console.log(error);
    }
  }

   // only update status order
  static async updateStatusOrderDrivers(req, res) {

    try {
        const datas = await order.update({
            status: req.body.status
          },
          { where: { driver_id: req.params.id } }
        );

        if (!datas) {
                baseResponse({ message: "status order not found", data: datas })( res, 404);
        }
                baseResponse({ message: "status order updated", data: datas })(res, 200);
    }
    catch(error) {
        console.log(error);
    }

  }


  static async deleteDrivers(req, res) {
    try {
        const datas = await driver.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (datas) {
            baseResponse({ message: "driver deleted", data: datas })(res, 200);
        }
        baseResponse({ message: "driver not found", data: datas })(res, 404);
    }catch (error) {
        console.log(error);
    }
  }

}

module.exports = DriverController