const { TituloModel } = require("../models");

const certificados = (req, res) => {
  const { id } = req.params;

  TituloModel.findById(id)
    .then(({ nombre, dni, formacion }) => {
      res.render("certificados", { nombre, dni, formacion });
    })
    .catch((err) => {
      res.render("error");
    });
};

const home = (req, res) => {
  res.render("home");
};

module.exports = [
  {
    method: "get",
    path: "/",
    handler: home,
    middlewares: [],
    skipDefaultMiddlewares: true,
  },
  {
    method: "get",
    path: "/certificados/:id",
    handler: certificados,
    middlewares: [],
    skipDefaultMiddlewares: true,
  },
];
