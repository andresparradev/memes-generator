const User = require("../models/user");
const verifyEmailExists = require("../lib/verifyEmailExists");
const generateToken = require("../lib/generateToken");

async function addUser(username, email, password) {
  const user = new User({
    username,
    email,
    password: "",
  });

  user.password = await User.encryptPassword(password);
  return await user.save();
}

async function getUser(email) {
  return await User.findOne({ email: email });
}

async function register(req, res) {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.json({ text: "Field without complete" });
  }

  const existEmail = await verifyEmailExists(email);

  if (existEmail) {
    return res.json({ text: "The user is exist" });
  }

  try {
    await addUser(username, email, password);
    res.json({ text: "User created" });
  } catch (err) {
    res.json({ text: "Error to create the user" });
    console.log(err);
  }
}

async function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({ text: "Field without complete" });
  }

  const user = await getUser(email);
  if (!user) res.json({ text: "The email/password are incorrect" });

  const passwordCorrect = await User.comparePassword(password, user.password);

  if (passwordCorrect) {
    const token = generateToken(user._id);
    res.json({
      token,
      username: user.username,
      email: user.email,
      _id: user._id,
    });
  } else {
    res.json({ text: "The email/password are incorrect" });
  }
}

async function getUser(req, res) {
  const { username } = req.params;

  if (!username) {
    return res.json({ text: "Field without complete" });
  }

  const user = await User.findOne({ username });

  if (!user) return res.status(404).json({ text: "User no exist" });

  res.status(200).json({
    data: {
      username: user.username,
      created: user.created,
      _id: user._id,
      avatar: user.avatar || null,
    },
  });
}

module.exports = {
  register,
  login,
  getUser,
};
