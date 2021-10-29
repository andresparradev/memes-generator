const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { PASS_JWT } = require("../config");

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ text: "No authorized" });
  }

  try {
    const { _id } = await jwt.decode(token, PASS_JWT);
    const user = await User.findOne({ _id });

    req.user = {
      _id: user._id,
      email: user.email,
      username: user.username,
      token: token,
    };

    next();
  } catch (err) {
    return res.status(401).json({ text: "No authorized" });
  }
};
