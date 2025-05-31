const mongoose = require("mongoose");
const Products = require("./Models/Products");
const connectToMongo = require("./db");

const dummyProducts = [
  {
    ProductName: "MacBook Pro 16-inch",
    ProductPrice: 207499,
    ProductBarcode: "MBP16-2024",
    Category: "Laptops",
    StockQuantity: 15,
    MinStockLevel: 5,
  },
  {
    ProductName: "iPhone 15 Pro",
    ProductPrice: 82999,
    ProductBarcode: "IP15P-2024",
    Category: "Smartphones",
    StockQuantity: 25,
    MinStockLevel: 10,
  },
  {
    ProductName: "iPad Pro 12.9",
    ProductPrice: 91299,
    ProductBarcode: "IPAD12-2024",
    Category: "Tablets",
    StockQuantity: 20,
    MinStockLevel: 8,
  },
  {
    ProductName: "Sony WH-1000XM5",
    ProductPrice: 33199,
    ProductBarcode: "WH1000XM5",
    Category: "Accessories",
    StockQuantity: 30,
    MinStockLevel: 15,
  },
  {
    ProductName: "LG UltraGear 27GP950",
    ProductPrice: 74699,
    ProductBarcode: "LG27GP950",
    Category: "Monitors",
    StockQuantity: 12,
    MinStockLevel: 5,
  },
  {
    ProductName: "Samsung Galaxy S24 Ultra",
    ProductPrice: 99599,
    ProductBarcode: "S24U-2024",
    Category: "Smartphones",
    StockQuantity: 18,
    MinStockLevel: 8,
  },
  {
    ProductName: "Apple Watch Series 9",
    ProductPrice: 33199,
    ProductBarcode: "AWS9-2024",
    Category: "Wearables",
    StockQuantity: 25,
    MinStockLevel: 10,
  },
  {
    ProductName: "Dell XPS 15",
    ProductPrice: 165999,
    ProductBarcode: "XPS15-2024",
    Category: "Laptops",
    StockQuantity: 10,
    MinStockLevel: 5,
  },
  {
    ProductName: "AirPods Pro 2",
    ProductPrice: 20749,
    ProductBarcode: "APP2-2024",
    Category: "Accessories",
    StockQuantity: 40,
    MinStockLevel: 20,
  },
  {
    ProductName: "Samsung Odyssey G9",
    ProductPrice: 107899,
    ProductBarcode: "G9-2024",
    Category: "Monitors",
    StockQuantity: 8,
    MinStockLevel: 4,
  },
];

const seedDatabase = async () => {
  try {
    await connectToMongo();

    // Clear existing products
    await Products.deleteMany({});

    // Insert dummy products
    await Products.insertMany(dummyProducts);

    console.log("Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
