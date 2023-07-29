const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, min: 0 },
    email: { type: String, required: true, unique: true },
  });
  
  // Create a model based on the schema
  const products = mongoose.model('Products', ProductsSchema);