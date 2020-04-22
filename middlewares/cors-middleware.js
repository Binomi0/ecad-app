const cors = require('cors');

function initCors(app) {
  const allowedOrigins = [
    'http://localhost:3000',
    'https://imputa-front.now.sh',
    'https://imputa-front-git-dev.binomio.now.sh',
  ];
  app.use(
    cors({
      credentials: true,
      origin(origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
          const msg =
            'The CORS policy for this site does not allow access from the specified Origin.';
          return callback(new Error(msg), false);
        }
        return callback(null, true);
      },
    }),
  );
  console.log('INITIALIZE: cors middleware');
}

module.exports = initCors;
