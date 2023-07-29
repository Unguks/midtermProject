const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    price: { type: Number, min: 0, required: true },
    store: { type: String, required: true, unique: true },
  });
  
  // Create a model based on the schema
  const products = mongoose.model('Products', ProductsSchema);

  const getProduct = async (req, res) => {
    try {
        const product = await ProductsSchema.find({_id: req.params.id}, {product: 1});
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports{ getProduct };
  