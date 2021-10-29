const User = require("../models/user");

async function verifyEmailExists(email) {
  try {
    const userResponse = await User.findOne({ email: email });
    if (!userResponse) return false;
    return true;
  } catch (err) {
    console.log(err);
  }
}

module.exports = verifyEmailExists;
