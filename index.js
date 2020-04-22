const express = require("express");

const app = express();
const path = require("path");

process.on("uncaughtException", (err) => {
  console.log("uncaughtException", err);
});

// config app
require("./config/dotenv")();
require("./config/polyfills");

// initialize app
require("./config/db").connect();
require("./middlewares/pre")(app);
require("./api")(app);
require("./middlewares/post")(app);

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.disable("view cache");

module.exports = app;
