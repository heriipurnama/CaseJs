const { check, validationResult } = require("express-validator");

/** 
 * RULES
*/

// authorId 	INT 	    required, number
// publisherId 	INT 	    required, number
// title 	    STRING 	    required, string
// price    	DECIMAL 	required, number
// year 	    DATETIME 	required, must be a valid year before 2022


// author_id: req.body.authorId,
// publisher_id: req.body.publisherId,
// title: req.body.title,
// price: req.body.price,
// year: req.body.year,

const bookValidationRules = () => {
  return [
    check("authorId").isNumeric().isLength({ min: 1 }),
    check("publisherId").isNumeric().isLength({ min: 1 }),
    check("title").isString().isLength({ min: 1 }),
    check("price").isNumeric().isLength({ min: 1 }),
    check('year').toDate().custom(async(year, { req }) => {
        const expireDate = new Date('2021-12-31');
        if(expireDate <= req.body.year){
            throw new Error('Year must be valid before 2022');
        }
    })
  ];
};

const validateBook = (req, res, next) => {
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

module.exports = { bookValidationRules, validateBook };
