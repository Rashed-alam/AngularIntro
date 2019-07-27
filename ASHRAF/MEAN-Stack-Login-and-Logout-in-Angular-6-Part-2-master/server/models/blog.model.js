const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: {type: Date, required: true}
});

module.exports = mongoose.model("Article", articleSchema);
