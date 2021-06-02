const mongoose = require("mongoose");

const deltaSchema = new mongoose.Schema({
  fecha: { type: String },
  TL: { type: String },
  numVuelo: { type: String },
  catering_1: { type: String },
  catering_2: { type: String },
  patio_1: { type: String },
  patio_2: { type: String },
  FD: { type: String },
  BD: { type: String },
  R: { type: String },
});

const model = mongoose.model("DeltaModel", deltaSchema);

module.exports = model;
