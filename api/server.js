require("dotenv").config({ path: "./.env.local" });

const express = require("express");
const cors = require("cors");
const app = express();
const auth = require("./middleware/auth");
const db = require("./config/db");
const { register, login, getInfoUser } = require("./routes/user");
const { addMeme, getMemesByUser } = require("./routes/memes");

app.set("port", process.env.PORT || 9000);

db();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Hello"));

app.get("/user/:username", getInfoUser);
app.post("/register", register);
app.post("/login", login);

app.get("/memes/user/:userId", getMemesByUser);
app.post("/memes/add", auth, addMeme);

app.listen(app.get("port"), () => {
  console.log("Listening...");
});
