const { expect } = require('chai');
const supertest = require('supertest');

const app = require('../../../');
const HealthController = require('./health.controller');

describe('--- HEALTH CONTROLLER ---', () => {
  it('should be defined', (done) => {
    expect(HealthController).to.be.a('function');
    done();
  });

  describe('get()', () => {
    const healthController = new HealthController();
    it('should be defined', (done) => {
      expect(healthController.get).to.be.a('function');
      done();
    });
  });

  describe('when it runs', () => {
    it('/monit/health should return status 200', (done) => {
      supertest(app)
        .get('/monit/health')
        .end((req, res) => {
          expect(res).to.has.property('status', 200);
          done();
        });
    });
  });
});
