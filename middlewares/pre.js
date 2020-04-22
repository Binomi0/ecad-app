const corsMiddleware = require("./cors-middleware");
const helmetMiddleware = require("./helmet-middleware");
const bodyParserMiddleware = require("./body-parser-middleware");
const loggerMiddleware = require("./logger-middleware");
const dbMiddleware = require("./db-middleware");

module.exports = (app) => {
  corsMiddleware(app);
  helmetMiddleware(app);
  bodyParserMiddleware(app);
  loggerMiddleware(app);
  dbMiddleware(app);
};
