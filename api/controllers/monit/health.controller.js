/* eslint-disable class-methods-use-this */

class HealthController {
  constructor(healthService) {
    this.healthService = healthService;
  }

  get(req, res) {
    res.send(this.healthService.getStatus());
  }
}

module.exports = HealthController;
