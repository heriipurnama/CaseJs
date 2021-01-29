'use strict'

let { authors }= require('../db/models'); 
let baseResponse = require('../utils/helper')

class authorController {

  static async getAllDatas(req, res) {
    try {
        const payload = await authors.findAll();
        baseResponse({ message: "authors retrieved", data: payload })(res);
    } catch (error) {
        console.log(error);
    }
  }

  static async getById(req, res) {
    try {
      const payload = await authors.findByPk(req.params.id);
      baseResponse({ message: "authors retrieved", data: payload })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async createAuthor(req, res) {
    // seq.
    try {
      const payload = await authors.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
      });
      baseResponse({ message: "authors created", data: payload })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async updateAuthor(req, res) {
    try {
        const authorDetails = await authors.update({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
        },
        { where: { id: req.params.id } }
    );
        if (!authorDetails) {
                baseResponse({ message: "author not found", data: authorDetails })( res,404);
            }
                baseResponse({ message: "author updated", data: authorDetails })(res, 200);
    }
    catch(error) {
        console.log(error);
    }
  }


  static async deleteAuthors(req, res) {
    try {
        const datas = await authors.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (datas) {
            baseResponse({ message: "user deleted", data: datas })(res, 200);
        }
        baseResponse({ message: "user not found", data: datas })(res, 404);
    }catch (error) {
        console.log(error);
    }
  }

}

module.exports = authorController
