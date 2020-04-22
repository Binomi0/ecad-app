const services = require("../services");

const monit = require("./monit")(services);
const titulo = require("./titulo")(services);

const home = require("../../routes");

module.exports = [...home, ...monit, ...titulo];
