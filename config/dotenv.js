const dotenv = require('dotenv');

function initDotEnv() {
  dotenv.config();

  console.log('INITIALIZE: dotenv');
}

module.exports = initDotEnv;
