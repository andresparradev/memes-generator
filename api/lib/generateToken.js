const jwt = require("jsonwebtoken");
const { PASS_JWT } = require("../config");

function generateToken(_id) {
  return jwt.sign({ _id }, PASS_JWT, {
    expiresIn: 60 * 60 * 24 * 365,
  });
}

module.exports = generateToken;
