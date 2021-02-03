const { check, validationResult } = require("express-validator");

const { author } = require("../db/models");

// firstName 	STRING 	required, max 20 chars
// lastName 	STRING 	nullable, max 30 chars
// email    	STRING 	required, pattern email, unique

// first_name: req.body.first_name,
// last_name: req.body.last_name,
// email: req.body.email,

const authorValidationRules = () => {
  return [
    check("first_name").isLength({ max: 20 }),
    check("last_name").isLength({ max: 30 }).optional({ nullable: true }),
    check("email")
      .isEmail()
      .custom(email => {
        return author.findOne( { where: {
          email: email
        }}).then(author => {
          if (author) {
            return Promise.reject('E-mail already in use');
          }
        });
      })
  ];
};

const validateAuthor = (req, res, next) => {
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

module.exports = { authorValidationRules, validateAuthor };
