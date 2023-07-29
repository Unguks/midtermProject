const mongoose = require("mongoose");

const videosSchema = new mongoose.Schema({
    titleVideo: { type: String, required: true },
    linkVideo: { type: String, min: 0 },
    thumbnail: { type: String, required: true, unique: true },
  });
  
  // Create a model based on the schema
  const videoss = mongoose.model('videos', videosSchema);

  const getAllVideos = async (req, res) => {
    try {
        const videos = await videoss.find();
        res.json(videos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

  const getVideoById = async (req, res) => {
    try {
        const video = await videoss.findById(req.params.id);
        res.json(video);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
  };

  const postVideos = async (req, res) => {
    const video = new Video(req.body);
    try {
        const insertedvideo = await videoss.save();
        res.status(201).json(insertedvideo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getAllVideos, getVideoById, postVideos};