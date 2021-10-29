const Meme = require("../models/meme");

function addMeme(req, res) {
  const { image, name, isPrivate } = req.body;

  const { _id: userId, username } = req.user;

  Meme.create({ image, name, userId, username, isPrivate })
    .then(() => {
      console.log("Added");
      res.json({ text: "Added" });
    })
    .catch((err) => {
      console.log(err);
      res.json({ text: "Error to add the meme" });
    });
}

function getMyMemes(req, res) {
  const userId = req.user._id;

  Meme.find({ userId })
    .then((memes) => {
      res.json(memes);
    })
    .catch((err) => {
      console.log(err);
      res.json({ text: "Error to get the memes" });
    });
}

module.exports = {
  addMeme,
  getMyMemes,
};
