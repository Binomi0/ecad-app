const mongoose = require("mongoose");

mongoose.Promise = Promise;

const properties = require("./server");

function connect() {
  if (process.env.NODE_ENV !== "test") {
    console.log("Conectando mongo =>", process.env.ATLAS_HOST);
    mongoose.connect(
      process.env.ATLAS_HOST,
      properties.mongo.options,
      (error) => {
        if (error) {
          console.error("Error al conectar a mongodb =>", error);
        }
      }
    );
  }
}

module.exports = {
  mongoose,
  connect,
};
