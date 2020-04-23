const mongoose = require("mongoose");
const modelName = "Titulo";

function getCodigo() {
  return Math.random().toString(36).toUpperCase().substring(2, 7);
}

const Titulo = new mongoose.Schema(
  {
    nombre: { type: String, index: true, required: true },
    fechaInicio: { type: Date, required: true },
    fechaFin: { type: Date, required: true },
    formacion: { type: String, required: true },
    codigo: { type: String, index: true, unique: true },
  },
  {
    versionKey: false,
  }
);

Titulo.pre("save", function (next) {
  this.codigo = `SW-${getCodigo()}${getCodigo()}`;
  next();
});

module.exports = mongoose.model(modelName, Titulo);
