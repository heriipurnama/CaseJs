`use strict`;

const jwt = require("jsonwebtoken");
const { user } = require("../db/models");
require("dotenv").config();

const Auth = async (req, res, next) => {
  try {
    let token = req.headers.authorization;
    let datas = jwt.verify(token, process.env.SECRET_KEY);
    req.user = await user.findByPk(datas.id);

    next();
  } catch {
    res.status(401);
    next(new Error("Invalid Token!"));
  }
};
module.exports = Auth;
