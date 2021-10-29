const { Schema, model } = require("mongoose");

const SchemaMeme = new Schema({
  userId: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: new Date(),
  },
  isPrivate: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("meme", SchemaMeme);
