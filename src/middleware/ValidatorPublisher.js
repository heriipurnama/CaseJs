const { check, validationResult } = require("express-validator");

const { publisher } = require("../db/models");

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

const publisherValidationRules = () => {
  return [
    check("name").isAlpha().withMessage("Must be only alphabetical chars"),
    check("address").isAlphanumeric(),
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
      }),
    check("phone").isMobilePhone(),
    check("website").isAlphanumeric().optional({ nullable: true })
  ];
};

const validatePublisher = (req, res, next) => {
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

module.exports = { publisherValidationRules, validatePublisher };
