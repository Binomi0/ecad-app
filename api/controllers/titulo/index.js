const TituloController = require("./titulo.controller");

module.exports = ({ tituloService }) => {
  const tituloController = new TituloController(tituloService);

  return [
    {
      method: "get",
      path: "/titulo/:id",
      handler: tituloController.get,
      bindTo: tituloController,
      middlewares: [],
      skipDefaultMiddlewares: true,
    },
    {
      method: "get",
      path: "/titulos",
      handler: tituloController.getAll,
      bindTo: tituloController,
      middlewares: [],
      skipDefaultMiddlewares: true,
    },
    {
      method: "post",
      path: "/titulo",
      handler: tituloController.create,
      bindTo: tituloController,
      middlewares: [],
      skipDefaultMiddlewares: true,
    },
    {
      method: "put",
      path: "/titulo/:id",
      handler: tituloController.update,
      bindTo: tituloController,
      middlewares: [],
      skipDefaultMiddlewares: true,
    },
    {
      method: "delete",
      path: "/titulo/:id",
      handler: tituloController.delete,
      bindTo: tituloController,
      middlewares: [],
      skipDefaultMiddlewares: true,
    },
  ];
};
