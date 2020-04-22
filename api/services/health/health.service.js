const { version } = require('../../../package.json');

class HealthService {
  constructor() {
    this.message = 'OK';
    this.version = version;
  }

  getStatus() {
    return { message: this.message, version: this.version };
  }
}

module.exports = HealthService;
