const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  userID: { type: String },
});

const model = mongoose.model("ProfileModels", profileSchema);

module.exports = model;
