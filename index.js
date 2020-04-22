const express = require("express");

const app = express();

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

module.exports = app;
