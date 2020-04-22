const home = (req, res) => {
  res.render("home", {
    nombre: "Nombre de usuario",
    dni: "0000000X",
    formacion:
      "Máster en Diseño Industrial con SolidWorks y el módulo de Superficies Complejas.",
  });
};

module.exports = {
  method: "get",
  path: "/",
  handler: home,
  middlewares: [],
  skipDefaultMiddlewares: true,
};
