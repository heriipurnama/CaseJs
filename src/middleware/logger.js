
const logger = (res, req, next) => {
   console.log("loggerMIddleware");
   next()
}

module.exports = logger;