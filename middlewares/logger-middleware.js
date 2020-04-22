const chalk = require("chalk");

function consoleLogger(req, res, next) {
  console.log(
    chalk.green(`[${new Date().toLocaleString()}]`),
    chalk.green(`[${req.method}] =>`, req.url)
  );
  next();
}

function loggerMiddleware(app) {
  app.use(consoleLogger);
  console.log("INITIALIZE: logger middleware");
}

module.exports = loggerMiddleware;
