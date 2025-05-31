import React, { useEffect, useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import config from "../config";

export default function UpdateProduct() {
  const [product, setProduct] = useState({
    ProductName: "",
    ProductPrice: "",
    ProductBarcode: "",
    Category: "",
    StockQuantity: "",
    MinStockLevel: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const categories = [
    "Laptops",
    "Smartphones",
    "Tablets",
    "Monitors",
    "Accessories",
    "Wearables",
    "Components",
    "Peripherals",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getProduct = async () => {
    try {
      const res = await fetch(config.endpoints.updateProduct(id), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (res.status === 201) {
        setProduct(data);
      } else {
        setError("Failed to fetch product details");
      }
    } catch (error) {
      console.error("Error fetching product:", error);
      setError("Failed to fetch product details");
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  const updateProduct = async (e) => {
    e.preventDefault();

    if (
      !product.ProductName ||
      !product.ProductPrice ||
      !product.ProductBarcode
    ) {
      setError("Please fill in all required fields");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch(config.endpoints.updateProduct(id), {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (res.status === 201) {
        navigate("/products");
      } else {
        setError("Failed to update product");
      }
    } catch (error) {
      console.error("Error updating product:", error);
      setError("Failed to update product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow border-0">
            <div className="card-body p-5">
              <h2 className="card-title mb-4">Update Product</h2>
              <form onSubmit={updateProduct}>
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Product Name</label>
                      <input
                        type="text"
                        className="form-control bg-dark text-white border-secondary"
                        name="ProductName"
                        value={product.ProductName}
                        onChange={handleChange}
                        placeholder="Enter product name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Price</label>
                      <input
                        type="number"
                        className="form-control bg-dark text-white border-secondary"
                        name="ProductPrice"
                        value={product.ProductPrice}
                        onChange={handleChange}
                        placeholder="Enter price"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Barcode</label>
                      <input
                        type="text"
                        className="form-control bg-dark text-white border-secondary"
                        name="ProductBarcode"
                        value={product.ProductBarcode}
                        onChange={handleChange}
                        placeholder="Enter barcode"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Category</label>
                      <select
                        className="form-select bg-dark text-white border-secondary"
                        name="Category"
                        value={product.Category}
                        onChange={handleChange}
                      >
                        <option value="">Select Category</option>
                        {categories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Stock Quantity</label>
                      <input
                        type="number"
                        className="form-control bg-dark text-white border-secondary"
                        name="StockQuantity"
                        value={product.StockQuantity}
                        onChange={handleChange}
                        placeholder="Enter stock quantity"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Minimum Stock Level</label>
                      <input
                        type="number"
                        className="form-control bg-dark text-white border-secondary"
                        name="MinStockLevel"
                        value={product.MinStockLevel}
                        onChange={handleChange}
                        placeholder="Enter minimum stock level"
                      />
                    </div>
                  </div>
                </div>

                {error && (
                  <div className="alert alert-danger mt-4" role="alert">
                    {error}
                  </div>
                )}

                <div className="d-flex gap-3 mt-4">
                  <NavLink to="/products" className="btn btn-outline-secondary">
                    Cancel
                  </NavLink>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? "Updating..." : "Update Product"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
