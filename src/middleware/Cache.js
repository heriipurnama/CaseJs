`use strict`;
const redis = require("redis");
const client = redis.createClient();
const baseResponse = require("../helpers/response");

client.on("error", function (error) {
  console.error(error);
});

const Cache = (req, res, next) => {
  try {
    client.get(req.originalUrl, (err, reply) => {
      if (reply) {
        res.send(reply);
      } else {
        next();
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = Cache;

// cache bisa dipindah ke app.js