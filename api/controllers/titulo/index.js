const TituloController = require("./titulo.controller");

module.exports = ({ tituloService }) => {
  const tituloController = new TituloController(tituloService);

  return [
    {
      method: "get",
      path: "/api/titulo/:id",
      handler: tituloController.get,
      bindTo: tituloController,
      middlewares: [],
      skipDefaultMiddlewares: true,
    },
    {
      method: "get",
      path: "/api/titulos",
      handler: tituloController.getAll,
      bindTo: tituloController,
      middlewares: [],
      skipDefaultMiddlewares: true,
    },
    {
      method: "post",
      path: "/api/titulo",
      handler: tituloController.create,
      bindTo: tituloController,
      middlewares: [],
      skipDefaultMiddlewares: true,
    },
    {
      method: "put",
      path: "/api/titulo/:id",
      handler: tituloController.update,
      bindTo: tituloController,
      middlewares: [],
      skipDefaultMiddlewares: true,
    },
    {
      method: "delete",
      path: "/api/titulo/:id",
      handler: tituloController.delete,
      bindTo: tituloController,
      middlewares: [],
      skipDefaultMiddlewares: true,
    },
  ];
};
