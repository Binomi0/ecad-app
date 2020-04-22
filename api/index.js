/* istanbul ignore file */

const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const routes = require('./controllers');
const routesBoot = require('./routes-boot');
const { mongoose } = require('../config/db');
const { sessionConfig } = require('../config/server');

module.exports = app => {
  const { secure, timeout } = sessionConfig;

  if (!secure) {
    app.set('trust proxy', 1);
  }

  const newSession = {
    name: sessionConfig.name,
    secret: sessionConfig.secret,
    resave: sessionConfig.resave,
    saveUninitialized: sessionConfig.saveUninitialized,
    cookie: { secure, maxAge: timeout },
  };

  if (process.env.NODE_ENV !== 'test') {
    newSession.store = new MongoStore({
      mongooseConnection: mongoose.connection,
      mongoOptions: { touchAfter: 24 * 3600 },
    });
  }
  const s = session(newSession);
  app.use(s);

  const router = routesBoot(routes, []);

  app.use('/', router);
  app.use('/doc', [express.static('doc/_book')]);
};
