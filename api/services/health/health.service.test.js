const { expect } = require('chai');

const HealthService = require('./health.service');

describe('--- HEALTH SERVICE ---', () => {
  const healthService = new HealthService();
  it('HealthService should be defined', done => {
    expect(healthService).to.be.a('object');
    done();
  });
  describe('getStatus()', () => {
    it('HealthService.getStatus should be defined', done => {
      expect(healthService.getStatus).to.be.a('function');
      done();
    });
    describe('when it runs', () => {
      it('should return "OK"', done => {
        expect(healthService.getStatus().message).to.equals('OK');
        done();
      });
    });
  });
});
