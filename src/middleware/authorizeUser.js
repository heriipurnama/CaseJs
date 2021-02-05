module.exports = (req, res, next) => {
  if (req.user.role === "user") {
    return next();
  }
  res.status(403).json("acces forbidden");
};
