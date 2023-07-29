const mongoose = require("mongoose");

const videosSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, min: 0 },
    email: { type: String, required: true, unique: true },
  });
  
  // Create a model based on the schema
  const videos = mongoose.model('videos', videosSchema);