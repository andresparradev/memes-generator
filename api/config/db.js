const mongoose = require("mongoose");
const { MONGO_URI } = require("./index");

module.exports = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch {
    console.log("Error to connect the database");
  }
};
