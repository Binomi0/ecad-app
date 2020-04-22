const handleErrorMiddleware = require('./handle-error-middleware');

module.exports = (app) => {
  handleErrorMiddleware(app);
};
