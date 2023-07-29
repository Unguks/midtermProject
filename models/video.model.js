const mongoose = require("mongoose");

const videosSchema = new mongoose.Schema({
    titleVideo: { type: String, required: true },
    linkVideo: { type: String, min: 0 },
    thumbnail: { type: String, required: true, unique: true },
  });
  
  // Create a model based on the schema
  const videos = mongoose.model('videos', videosSchema);