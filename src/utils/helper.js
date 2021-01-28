'use strict'

exports.response = function (values, res) {
  if (typeof values.errno === 'undefined') {
    const data = {
      status: 200,
      information: 'data successfull',
      values: values
    }
    res.json(data)
    res.end()
  } else {
    const data = {
      status: 500,
      information: 'Internal Server Error!'
    }
    res.json(data)
    res.end()
  }
}


exports.responseHTML = function (values, res) {
    const data = values;
    res.format({
        'text/html': function () {
          res.send(data)
        },
        default: function () {
          // log the request and respond with 406
          res.status(406).send('Not Acceptable')
        }
    })
}

// global responses HTML
exports.responses = function (values, res) {
    const data = "Post success!";
    res.format({
        'text/html': function () {
          res.send(data)
        },
        default: function () {
          // log the request and respond with 406
          res.status(406).send('Not Acceptable')
        }
    })
}
