const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  userID: { type: String },
  messageID: { type: String },
  apodo: { type: String },
  icono: { type: String },
  fecha: { type: String },
  trabajo: { type: String },
});

const model = mongoose.model("ProfileModels", profileSchema);

module.exports = model;
