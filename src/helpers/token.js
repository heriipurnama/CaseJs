const jwt = require("jsonwebtoken");

const token = (user) =>
  jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role
    },
    process.env.SECRET_KEY,
    { expiresIn: 60 * 60 }
  );
module.exports = token;
