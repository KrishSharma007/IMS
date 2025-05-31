const express = require("express");
const router = express.Router();
const products = require("../Models/Products");

//Inserting(Creating) Data:
router.post("/insertproduct", async (req, res) => {
  const {
    ProductName,
    ProductPrice,
    ProductBarcode,
    Category,
    StockQuantity,
    MinStockLevel,
  } = req.body;

  if (!ProductName || !ProductPrice || !ProductBarcode) {
    return res.status(400).json({ error: "Required fields are missing" });
  }

  try {
    const pre = await products.findOne({ ProductBarcode: ProductBarcode });

    if (pre) {
      return res.status(422).json({ error: "Product is already added" });
    }

    const addProduct = new products({
      ProductName,
      ProductPrice,
      ProductBarcode,
      Category,
      StockQuantity: StockQuantity || 0,
      MinStockLevel: MinStockLevel || 5,
    });

    await addProduct.save();
    res.status(201).json(addProduct);
    console.log("Product added:", addProduct);
  } catch (err) {
    console.error("Error adding product:", err);
    res.status(500).json({ error: "Failed to add product" });
  }
});

//Getting(Reading) Data:
router.get("/products", async (req, res) => {
  try {
    const getProducts = await products.find({});
    console.log(getProducts);
    res.status(201).json(getProducts);
  } catch (err) {
    console.log(err);
  }
});

//Getting(Reading) individual Data:
router.get("/products/:id", async (req, res) => {
  try {
    const getProduct = await products.findById(req.params.id);
    console.log(getProduct);
    res.status(201).json(getProduct);
  } catch (err) {
    console.log(err);
  }
});

//Editing(Updating) Data:
router.put("/updateproduct/:id", async (req, res) => {
  const {
    ProductName,
    ProductPrice,
    ProductBarcode,
    Category,
    StockQuantity,
    MinStockLevel,
  } = req.body;

  try {
    const updateProducts = await products.findByIdAndUpdate(
      req.params.id,
      {
        ProductName,
        ProductPrice,
        ProductBarcode,
        Category,
        StockQuantity,
        MinStockLevel,
      },
      { new: true }
    );
    console.log("Data Updated");
    res.status(201).json(updateProducts);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to update product" });
  }
});

//Deleting Data:
router.delete("/deleteproduct/:id", async (req, res) => {
  try {
    const deleteProduct = await products.findByIdAndDelete(req.params.id);
    console.log("Data Deleted");
    res.status(201).json(deleteProduct);
  } catch (err) {
    console.log(err);
  }
});

// Dashboard Statistics
router.get("/dashboard/stats", async (req, res) => {
  try {
    const allProducts = await products.find({});

    // Calculate total value (price * quantity)
    const totalValue = allProducts.reduce(
      (sum, product) =>
        sum + product.ProductPrice * (product.StockQuantity || 0),
      0
    );

    // Calculate low stock items (items below minimum stock level)
    const lowStock = allProducts.filter(
      (product) => (product.StockQuantity || 0) <= (product.MinStockLevel || 0)
    ).length;

    // Calculate high value items (items over ₹50,000)
    const highValue = allProducts.filter(
      (product) => product.ProductPrice > 50000
    ).length;

    // Get category distribution
    const categoryDistribution = allProducts.reduce((acc, product) => {
      const category = product.Category || "Uncategorized";
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {});

    // Get top 5 most expensive products
    const topProducts = [...allProducts]
      .sort((a, b) => b.ProductPrice - a.ProductPrice)
      .slice(0, 5)
      .map((product) => ({
        _id: product._id,
        ProductName: product.ProductName,
        ProductPrice: product.ProductPrice,
        Category: product.Category || "Uncategorized",
        StockQuantity: product.StockQuantity || 0,
      }));

    res.status(200).json({
      totalProducts: allProducts.length,
      totalValue,
      lowStock,
      highValue,
      categoryDistribution,
      topProducts,
    });
  } catch (err) {
    console.error("Error fetching dashboard stats:", err);
    res.status(500).json({ error: "Error fetching dashboard statistics" });
  }
});

module.exports = router;
