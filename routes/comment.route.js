const express = require("express")
const { saveComment, getComment } = require("../models/comment.model");
app = express();

const router = express.Router();

router.get("/:id/getComment", getComment);
router.post("/:id/postComment", saveComment);

module.exports = router;