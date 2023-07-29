const express = require("express");
const commentRoute = require("./routes/comment.route");
const productRoute = require("./routes/product.route");
const videoRoute = require("./routes/video.route");
const connectDb = require("./db");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

connectDb();

app.use(cors());
app.use(commentRoute);
app.use(productRoute);
app.use(videoRoute);

const listener = app.listen(port, function () {
    console.log("Listening on port " + listener.address().port);
  });


