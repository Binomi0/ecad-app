const db = require("../config/db");

function handleDBConnection(req, res, next) {
  if (!db.mongoose.connections.length) {
    console.log("Reconectando a la base de datos...");
    db.connect();
  }

  next();
}

function dbHandler(app) {
  app.use(handleDBConnection);
  console.log("INITIALIZE: db middleware");
}

module.exports = dbHandler;
