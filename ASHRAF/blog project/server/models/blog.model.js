const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
  post_title: { type: String, required: true },
  post_description: { type: String, required: true },
  post_location: {type: String, required: true},
  post_privacy: {type: String, required: true},
  post_user: {type: String}
});

module.exports = mongoose.model("Blog", BlogSchema);
