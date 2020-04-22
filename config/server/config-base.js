module.exports = {
  // any property that will be the same for all environments
  sessionConfig: {
    name: "ecad-ses",
    secret: "super-secret",
    timeout: 4.32e8, // 5 days,
    secure: false,
    resave: false,
    saveUninitialized: true,
  },
};
