const mongoose = require("mongoose");

const deportadosSchema = new mongoose.Schema({
  numExp: { type: Number },
  asistencia: { type: Number },
  compAerea: { type: String },
  fechaEntrada: { type: String },
  horaEntrada: { type: String },
  vueloSalida: { type: String },
  fechaSalida: { type: String },
  horaSalida: { type: String },
  horaRealSalida: { type: String },
  diaRealSalida: { type: String },
  motivo: { type: String },
});

const model = mongoose.model("DeportadosModel", deportadosSchema);

module.exports = model;
