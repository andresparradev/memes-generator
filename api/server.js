require("dotenv").config({ path: "./.env.local" });

const express = require("express");
const cors = require("cors");
const app = express();
const auth = require("./middleware/auth");
const db = require("./config/db");
const { register, login, getUser } = require("./routes/user");
const { addMeme, getMyMemes } = require("./routes/memes");

app.set("port", 9000);

db();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Hello"));

app.get("/user/:username", getUser);
app.post("/register", register);
app.post("/login", login);

app.get("/memes/my", auth, getMyMemes);
app.post("/memes/add", auth, addMeme);

app.listen(app.get("port"), () => {
  console.log("Listening...");
});
