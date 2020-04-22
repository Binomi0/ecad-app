const helmet = require('helmet');

function initHelmet(app) {
  app.use(helmet());
  console.log('INITIALIZE: helmet middleware');
}

module.exports = initHelmet;
