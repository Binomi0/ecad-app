const cors = require("cors");

function initCors(app) {
  app.use(cors());
  console.log("INITIALIZE: cors middleware");
}

module.exports = initCors;
