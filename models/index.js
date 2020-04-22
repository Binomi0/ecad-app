const mongoose = require("mongoose");

const TituloModel = require("./Titulo");

mongoose.Promise = Promise;

module.exports = {
  TituloModel,
  mongoose,
};
