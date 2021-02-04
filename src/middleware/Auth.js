`use strict`;

const passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;

const Auth = () => {
  passport.use(new LocalStrategy());
};
module.exports = Auth;


