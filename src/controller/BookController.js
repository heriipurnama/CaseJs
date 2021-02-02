"use strict";

let { author, book, publisher } = require("../db/models");
let baseResponse = require("../helpers/response");

class BookController {
  static async getAllDatas(req, res) {
    try {
      const payload = await book.findAll();
      baseResponse({ message: "books retrieved", data: payload })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async getById(req, res) {
    try {
      const payload = await book.findByPk(req.params.id);
      baseResponse({ message: "books retrieved", data: payload })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async createBook(req, res) {
    // seq.
    try {
      const payload = await book.create({
        author_id: req.body.authorId,
        publisher_id: req.body.publisherId,
        title: req.body.title,
        price: req.body.price,
        year: req.body.year,
      });
      baseResponse({ message: "books created", data: payload })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async updateBook(req, res) {
    try {
      const authorDetails = await book.update(
        {
          author_id: req.body.authorId,
          publisher_id: req.body.publisherId,
          title: req.body.title,
          price: req.body.price,
          year: req.body.year,
        },
        { where: { id: req.params.id } }
      );
      if (!authorDetails) {
        baseResponse({ message: "book not found", data: authorDetails })(
          res,
          404
        );
      }
      baseResponse({ message: "book updated", data: authorDetails })(res, 200);
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteBooks(req, res) {
    try {
      const datas = await book.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (datas) {
        baseResponse({ message: "book deleted", data: datas })(res, 200);
      }
      baseResponse({ message: "book not found", data: datas })(res, 404);
    } catch (error) {
      console.log(error);
    }
  }

  // relations
  static async getBookAuthor(req, res) {
    const data = await author.findOne(
      {
        include: [
          {
            model: publisher,
            as: "publishers",
            through: { attributes: [] },
          },
        ],
      },
      { where: { id: req.params.id } }
    );
    baseResponse({ message: "get book with author success", data: data })(
      res,
      200
    );
  }

  static async getAuthorPublisher(req, res) {
    const payload = await publisher.findAll({
      include: {
        model: book,
        where: {
          id: req.params.id,
        },
        include: {
          model: author,
        },
      },
    });
    baseResponse({ message: "get publisher with author success", data: payload })(
      res,
      200
    );
  }

  static async getBookSpesific(req, res) {
    const sort = req.query.sort_by;
    const order = req.query.order_by;

    if (sort === req.query.sort_by && order === req.query.order_by) {
      const payload = await book.findAll({
        order: [[sort, order]],
      });
      baseResponse({ message: "retrieved user", data: payload })(res, 200);
    }
  }

  static async uploadCover(req, res){
    try {
      let path = "htttp://127.0.0.1:4000/CaseJs/public/upload/books/";
      let fileName = req.file.filename;
      let resultPathFileName = path + fileName;
    
      const datas = await book.update(
        {
          cover_book : resultPathFileName
        },
        { where: { id: req.params.id } }
      );
    } catch (error) {
      console.log(error);
    }
    return baseResponse({ message: "cover book upload succes" })(res, 200);
  }
}

module.exports = BookController;
