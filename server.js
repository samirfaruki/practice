const express = require("express");
const dotenv = require("dotenv");
var morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
// app.use();
dotenv.config({ path: "config.env" });

const Port = process.env.Port || 3000;

app.get("/", async (req, res) => {
  try {
    res.send("hello g from server" + Port);
  } catch (error) {
    console.log("error:", error);
  }
});
app.listen(Port, () => {
  console.log(`http://localhost:${Port}`);
});
