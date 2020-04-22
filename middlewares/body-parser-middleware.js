const bodyParser = require('body-parser');

function initBodyParser(app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  console.log('INITIALIZE: bodyParser middleware');
}

module.exports = initBodyParser;
