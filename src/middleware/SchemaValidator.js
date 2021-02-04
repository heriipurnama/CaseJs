`use strict`;

const { check, validationResult } = require("express-validator");
const { author, publisher, user } = require("../db/models");

class SchemaValidator {
  // firstName 	STRING 	required, max 20 chars
  // lastName 	STRING 	nullable, max 30 chars
  // email    	STRING 	required, pattern email, unique

  // first_name: req.body.first_name,
  // last_name: req.body.last_name,
  // email: req.body.email,

  static author = () => {
    return [
      check("first_name").isAlpha().isLength({ max: 20, min: 1 }),
      check("last_name")
        .isAlpha()
        .isLength({ max: 30, min: 1 })
        .optional({ nullable: true }),
      check("email")
        .isEmail()
        .custom((email) => {
          return author
            .findOne({
              where: {
                email: email,
              },
            })
            .then((author) => {
              if (author) {
                return Promise.reject("E-mail already in use");
              }
            });
        }),
    ];
  };

  // authorId 	INT 	    required, number
  // publisherId 	INT 	required, number
  // title 	    STRING 	    required, string *ganti ke aphanumeric krn judul bisa berisi angka exp. '5CM'.
  // price    	DECIMAL 	required, number
  // year 	    DATETIME 	required, must be a valid year before 2022

  // author_id: req.body.authorId,
  // publisher_id: req.body.publisherId,
  // title: req.body.title,
  // price: req.body.price,
  // year: req.body.year,

  static book = () => {
    return [
      check("authorId").isNumeric().isLength({ min: 1 }),
      check("publisherId").isNumeric().isLength({ min: 1 }),
      check("title").isAlphanumeric().isLength({ min: 1 }),
      check("price").isNumeric().isLength({ min: 1 }),
      check("year")
        .toDate()
        .custom(async (year, { req }) => {
          const expireDate = new Date("2021-12-31");
          if (expireDate <= req.body.year) {
            throw new Error("Year must be valid before 2022");
          }
        }),
    ];
  };

  // name 	  STRING 	required, string
  // address 	STRING 	required, string
  // email 	  STRING 	required, email pattern, unique
  // phone 	  BIGINT 	required
  // website 	STRING 	nullable

  // name: req.body.name,
  // address: req.body.address,
  // email: req.body.email,
  // phone: req.body.phone,
  // website: req.body.website

  static publisher = () => {
    return [
      check("name")
        .isAlpha()
        .isLength({ min: 1 })
        .withMessage("Must be only alphabetical chars"),
      check("address").isAlphanumeric().isLength({ min: 1 }),
      check("email")
        .isEmail()
        .custom((email) => {
          return publisher
            .findOne({
              where: {
                email: email,
              },
            })
            .then((publisher) => {
              if (publisher) {
                return Promise.reject("E-mail already in use");
              }
            });
        }),
      check("phone").isMobilePhone(),
      check("website").isAlphanumeric().optional({ nullable: true }),
    ];
  };

  // firstName 	STRING 	required, max 30 chars
  // lastName 	STRING 	required, max 30 chars
  // email 	    STRING 	required, pattern email, and unique
  // password 	STRING 	required

  static user = () => {
    return [
      check("firstName").isString().isLength({ max: 20, min: 1 }),
      check("lastName")
        .isString()
        .isLength({ max: 30, min: 1 })
        .optional({ nullable: true }),
      check("email")
        .isEmail()
        .custom((email) => {
          return user
            .findOne({
              where: {
                email: email,
              },
            })
            .then((user) => {
              if (user) {
                return Promise.reject("E-mail already in use");
              }
            });
        }),
      check("password").isString().isLength({ min: 1 }),
    ];
  };

  // validate
  static validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    const extractedErrors = [];
    errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));
    return res.status(422).json({
      errors: extractedErrors,
    });
  };
}

module.exports = SchemaValidator;
