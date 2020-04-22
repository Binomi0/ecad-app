const configBase = require('./config-base');
const configDev = require('./config-dev');

const config = Object.assign({}, configBase, configDev);

module.exports = config;
