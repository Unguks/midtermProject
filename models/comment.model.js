const exp = require("constants");
const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
    username: { type: String, required: true },
    content: { type: String, min: 0, required: true },
  });
  
  // Create a model based on the schema
  const comments = mongoose.model('Comments', commentsSchema);

  const saveComment = async (req, res) => {
    try {
        const insertedcomment = await comments.updateOne({_id: req.params.id},{"$push": {"comment": req.body}});
        res.status(201).json({
            message: "Comment added successfully",
            data : {
                username : insertedcomment.commentUsername,
                content  : insertedcomment.commentContent,
            }
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getComment = async (req, res) => {
  try {
      const comment = await comments.find({_id: req.params.id}, {comment: 1});
      res.status(200).json(comment);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
};

module.exports = { saveComment, getComment };