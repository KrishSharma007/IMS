const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  ProductName: {
    type: String,
    required: true,
  },
  ProductPrice: {
    type: Number,
    required: true,
  },
  ProductBarcode: {
    type: String,
    required: true,
    unique: true,
  },
  Category: {
    type: String,
    enum: [
      "Laptops",
      "Smartphones",
      "Tablets",
      "Monitors",
      "Accessories",
      "Wearables",
      "Components",
      "Peripherals",
    ],
    default: "Uncategorized",
  },
  StockQuantity: {
    type: Number,
    default: 0,
  },
  MinStockLevel: {
    type: Number,
    default: 5,
  },
  LastUpdated: {
    type: Date,
    default: Date.now,
  },
});

const Products = mongoose.model("Products", ProductSchema);

module.exports = Products;
