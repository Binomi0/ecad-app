const { TituloModel } = require("../models");

const home = (req, res) => {
  const { id } = req.params;

  TituloModel.findById(id)
    .then(({ nombre, dni, formacion }) => {
      res.render("certificados", { nombre, dni, formacion });
    })
    .catch((err) => {
      res.render("error");
    });
};

module.exports = {
  method: "get",
  path: "/certificados/:id",
  handler: home,
  middlewares: [],
  skipDefaultMiddlewares: true,
};
