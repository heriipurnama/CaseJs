'use strict'

let { publishers }= require('../db/models'); 
let baseResponse = require('../utils/helper')

class PublisherController {

  static async getAllDatas(req, res) {
    try {
        const payload = await publishers.findAll();
        baseResponse({ message: "publishers retrieved", data: payload })(res);
    } catch (error) {
        console.log(error);
    }
  }

  static async getAllBook(req, res) {
    try {
      const payload = await publishers.findAll({
        include : 'authors'
      });
      baseResponse({ message: "publishers retrieved", data: payload })(res);
  } catch (error) {
      console.log(error);
  }
  }

  static async getById(req, res) {
    try {
      const payload = await publishers.findByPk(req.params.id);
      baseResponse({ message: "publishers retrieved", data: payload })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async createPublisher(req, res) {
    // seq.
    try {
      const payload = await publishers.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
      });
      baseResponse({ message: "publishers created", data: payload })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async updatePublisher(req, res) {
    try {
        const authorDetails = await publishers.update({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
        },
        { where: { id: req.params.id } }
    );
        if (!authorDetails) {
                baseResponse({ message: "book not found", data: authorDetails })( res,404);
            }
                baseResponse({ message: "book updated", data: authorDetails })(res, 200);
    }
    catch(error) {
        console.log(error);
    }
  }


  static async deletePublisher(req, res) {
    try {
        const datas = await publishers.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (datas) {
            baseResponse({ message: "book deleted", data: datas })(res, 200);
        }
            baseResponse({ message: "book not found", data: datas })(res, 404);
    }catch (error) {
        console.log(error);
    }
  }

}

module.exports = PublisherController
