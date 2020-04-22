const chalk = require('chalk');
const { Router } = require('express');

function routesBoot(routes, defaultMiddlewares) {
  // defaultMiddlewares = []
  return routes.reduce(
    (
      router,
      {
        method,
        path,
        handler,
        bindTo,
        middlewares, // middlewares = [],
        skipDefaultMiddlewares = false, // skipDefaultMiddlewares = false,
      },
    ) => {
      const finalMiddlewares = skipDefaultMiddlewares
        ? [...middlewares]
        : [...defaultMiddlewares, middlewares];

      console.log(chalk.blue(`INITIALIZE: route [${method.toUpperCase()}] ${chalk.bold(path)}`));
      return router[method](path, [...finalMiddlewares, handler.bind(bindTo)]);
    },
    new Router(),
  );
}

module.exports = routesBoot;
