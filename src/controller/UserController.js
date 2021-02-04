`use strict`;

let { user } = require("../db/models");
let baseResponse = require("../helpers/response");
let auth = require("../middleware/Auth");

class UserController {
  static async getAllDatas(req, res, next) {
    try {
      const payload = await user.findAll();
      baseResponse({ message: "user retrieved", data: payload })(res);
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
    try {

      const payload = await auth(
        user.findOne(
          { where: { first_name: req.body.firstName } },
          function (err, user) {
            if (err) {
              console.log(err);
             // return done(err);
            }
            if (!user) {
            //  return done(null, false, { message: "Incorrect username." });
            }
            if (!user.validPassword(req.body.password)) {
             // return done(null, false, { message: "Incorrect password." });
            }
           // return done(null, user);
          }
        )
      );
      console.log("payload", payload);

    //  baseResponse({ message: "login succesfull", data: payload })(res);
    } catch (error) {
      res.status(400);
      next(error);
    }
  }
}

module.exports = UserController;
