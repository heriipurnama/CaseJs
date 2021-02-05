`use strict`;

const bcrypt = require("bcrypt");
let { user } = require("../db/models");
let baseResponse = require("../helpers/response");
const token = require("../helpers/token");

class UserController {
  static async getAllDatas(req, res, next) {
    try {
      const payload = await user.findAll();
      baseResponse({ message: "user retrieved", data: payload })(res, 200);
    } catch (error) {
      res.status(400);
      next(error);
    }
  }

  static async getById(req, res, next) {
    try {
      const payload = await user.findByPk(req.params.id);
      baseResponse({ message: "user retrieved", data: payload })(res);
    } catch (error) {
      res.status(400);
      next(error);
    }
  }

  static async createUser(req, res, next) {
    try {
      const payload = await user.create({
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        photo: req.body.photo,
        role: req.body.role,
      });
      baseResponse({ message: "user created", data: payload })(res);
    } catch (error) {
      res.status(400);
      next(error);
    }
  }

  static async updateUser(req, res, next) {
    try {
      const authorDetails = await user.update(
        {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password,
        },
        { where: { id: req.params.id } }
      );
      if (!authorDetails) {
        baseResponse({ message: "user not found", data: authorDetails })(
          res,
          404
        );
      }
      baseResponse({ message: "user updated", data: authorDetails })(res, 200);
    } catch (error) {
      res.status(400);
      next(error);
    }
  }

  static async deleteUser(req, res, next) {
    try {
      const datas = await user.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (datas) {
        baseResponse({ message: "user deleted", data: datas })(res, 200);
      }
      baseResponse({ message: "user not found", data: datas })(res, 404);
    } catch (error) {
      res.status(400);
      next(error);
    }
  }

  static async login(req, res, next) {
    let { email, password } = req.body;
    try {
      let datas = await user.findOne({
        where: {
          email: email,
        },
      });

      if (!datas) {
        throw new Error(`email ${email} doesn't exist!`);
      }
      const isPassword = await bcrypt.compareSync(password, datas.password);
      if (!isPassword) {
        throw new Error(`Wrong password!`);
      }
      return baseResponse({ message: "Login success", data: token(datas) })(
        res,
        200
      );
    } catch (err) {
      res.status(403);
      next(err);
    }
  }

  static async profile(req, res) {
    res.status(200);
    return res.json(req.user.entity);
  }
}

module.exports = UserController;
