'use strict'

let { author }= require('../db/models'); 
let baseResponse = require('../helpers/response')

class AuthorController {

  static async getAllDatas(req, res) {
    try {
        const payload = await author.findAll();
        baseResponse({ message: "authors retrieved", data: payload })(res);
    } catch (error) {
        console.log(error);
    }
  }

  static async getById(req, res) {
    try {
      const payload = await author.findByPk(req.params.id);
      baseResponse({ message: "authors retrieved", data: payload })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async createAuthor(req, res) {
    // seq.
    try {
      const payload = await author.create({
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
        const authorDetails = await author.update({
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
        const datas = await author.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (datas) {
            baseResponse({ message: "author deleted", data: datas })(res, 200);
        }
        baseResponse({ message: "author not found", data: datas })(res, 404);
    }catch (error) {
        console.log(error);
    }
  }
  
  static async uploadPhoto(req, res){
    return baseResponse({ message: "photo upload succes" })(res, 200);
  }
}

module.exports = AuthorController
