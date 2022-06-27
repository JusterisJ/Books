const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
    default: "uploading info",
  },
  releaseDate: {
    type: Date,
    required: false,
  },
  cover: { type: String, default: "https://www.adobe.com/express/create/cover/media_181e3d2c78f153ae7bf0e19a2faeb9a76e234da30.jpeg?width=400&format=jpeg&optimize=medium" },
});

const Books = new mongoose.model("Books", bookSchema);

module.exports = Books;
