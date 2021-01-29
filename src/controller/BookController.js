'use strict'

let { books }= require('../db/models'); 
let baseResponse = require('../utils/helper')

class BookController {

  static async getAllDatas(req, res) {
    try {
        const payload = await books.findAll();
        baseResponse({ message: "books retrieved", data: payload })(res);
    } catch (error) {
        console.log(error);
    }
  }

  static async getAllBook(req, res) {
    try {
      const payload = await books.findAll({
        include : 'authors',
        attribute :['name']
      });
      baseResponse({ message: "books retrieved", data: payload })(res);
  } catch (error) {
      console.log(error);
  }
  }

  static async getById(req, res) {
    try {
      const payload = await books.findByPk(req.params.id);
      baseResponse({ message: "books retrieved", data: payload })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async createBook(req, res) {
    // seq.
    try {
      const payload = await books.create({
        authorId : req.body.authorId,
        publisherId : req.body.publisherId,
        title: req.body.title,
        price: req.body.price,
        year: req.body.year
      });
      baseResponse({ message: "books created", data: payload })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async updateBook(req, res) {
    try {
        const authorDetails = await books.update({
          authorId : req.body.authorId,
          publisherId : req.body.publisherId,
          title: req.body.title,
          price: req.body.price,
          year: req.body.year
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


  static async deleteBooks(req, res) {
    try {
        const datas = await books.destroy({
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

module.exports = BookController
