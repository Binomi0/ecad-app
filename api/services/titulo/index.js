const TituloService = require("./titulo.service");
const { TituloModel } = require("../../../models");

const tituloService = new TituloService(TituloModel);

module.exports = tituloService;
