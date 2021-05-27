const mongoose = require("mongoose");

const dailySchema = new mongoose.Schema({
  userID: { type: String },
  messageID: { type: String },
  apodo: { type: String },
  icono: { type: String },
  fecha: { type: String },
  trabajo: { type: String },
});

const model = mongoose.model("DailyModel", dailySchema);

module.exports = model;
