const HealthController = require('./health.controller');

module.exports = ({ healtService }) => {
  const healthController = new HealthController(healtService);

  return [
    {
      method: 'get',
      path: '/monit/health',
      handler: healthController.get,
      bindTo: healthController,
      middlewares: [],
      skipDefaultMiddlewares: true,
    },
  ];
};
