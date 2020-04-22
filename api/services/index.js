const config = require("./../../config/server");

const healtService = require("./health");
const tituloService = require("./titulo");

module.exports = {
  config,
  healtService,
  tituloService,
};
