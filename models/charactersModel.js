const mongoose = require("mongoose");

// Create a new schema
const characterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  show: {
    type: String,
    required: true,
  },
});

// Create a model instance
const Character = (mongoose.Character = mongoose.model(
  "Character",
  characterSchema
));

module.exports = Character;
