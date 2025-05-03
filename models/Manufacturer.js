const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

const ManufacturerSchema = new mongoose.Schema({
  name: String,
  category: String,
  city: String,
  products: [ProductSchema],
});

module.exports = mongoose.model('Manufacturer', ManufacturerSchema);
