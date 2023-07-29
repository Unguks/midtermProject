const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    price: { type: Number, min: 0, required: true },
    store: { type: String, required: true, unique: true },
  });
  
  // Create a model based on the schema
  const products = mongoose.model('Products', ProductsSchema);

  