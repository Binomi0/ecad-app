const mongoose = require("mongoose");
const modelName = "Titulo";

const Titulo = new mongoose.Schema(
  {
    nombre: { type: String, index: true, required: true },
    dni: { type: String, required: true },
    fechaInicio: { type: Date, required: true },
    fechaFin: { type: Date, required: true },
    formacion: { type: String, required: true },
    codigo: { type: String, index: true },
  },
  {
    versionKey: false,
    timestamps: {},
  }
);

module.exports = mongoose.model(modelName, Titulo);
