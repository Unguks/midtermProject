const express = require("express")
const { getAllVideos, getVideoById, saveVideos } = require("../models/video.model");
app = express();

const router = express.Router();

router.get("/videos", getAllVideos);
router.post("/:id/video", getVideoById);
router.post("/:id/saveVideos", saveVideos);

module.exports = router;