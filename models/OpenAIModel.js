const mongoose = require("mongoose");

const OpenAIResponseSchema = new mongoose.Schema({
  prompt: String,
  response: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("OpenAIResponse", OpenAIResponseSchema);
