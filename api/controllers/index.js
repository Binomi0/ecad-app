const services = require("../services");

const monit = require("./monit")(services);
const titulo = require("./titulo")(services);

function get(req, res) {
  res.send("Has accedido al servidor de títulos de ECAD");
}
const home = {
  method: "get",
  path: "/",
  handler: get,
  middlewares: [],
  skipDefaultMiddlewares: true,
};

module.exports = [home, ...monit, ...titulo];
