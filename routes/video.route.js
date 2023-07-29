const express = require("express")
const { getAllVideos, getVideoById, postVideos } = require("../models/video.model");
app = express();

const router = express.Router();

router.get("/videos", getAllVideos);
router.get("/:id/video", getVideoById);
router.post("/:id/saveVideos", postVideos);

module.exports = router;