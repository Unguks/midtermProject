const express = require("express")
const getProduct = require("../models/product.model");
app = express();

const router = express.Router();

router.get("/:id/getProduct", getProduct);

module.exports = router;