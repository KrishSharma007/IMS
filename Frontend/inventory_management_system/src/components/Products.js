import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import config from "../config";

export default function Products() {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const res = await fetch(config.endpoints.products, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (res.status === 201) {
        setProductData(data);
        setError(null);
      } else {
        setError("Failed to fetch products");
      }
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(config.endpoints.deleteProduct(id), {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        console.log("Product deleted successfully");
        getProducts();
      } else {
        console.error("Failed to delete product");
      }
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid py-4 py-lg-5">
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 mb-4">
        <h2 className="text-white mb-0">Products Inventory</h2>
        <NavLink to="/insertproduct" className="btn btn-primary">
          <FaPlus className="me-2" />
          Add New Product
        </NavLink>
      </div>

      <div className="card shadow border-0">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover table-dark mb-0">
              <thead>
                <tr className="text-white border-bottom border-secondary">
                  <th scope="col" className="p-3">
                    #
                  </th>
                  <th scope="col" className="p-3">
                    Product Name
                  </th>
                  <th scope="col" className="p-3">
                    Price
                  </th>
                  <th scope="col" className="p-3 d-none d-md-table-cell">
                    Barcode
                  </th>
                  <th scope="col" className="p-3 d-none d-sm-table-cell">
                    Category
                  </th>
                  <th scope="col" className="p-3">
                    Stock
                  </th>
                  <th scope="col" className="p-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="text-white">
                {productData.map((element, id) => (
                  <tr
                    key={element._id}
                    className="border-bottom border-secondary hover-dark"
                  >
                    <th scope="row" className="p-3">
                      {id + 1}
                    </th>
                    <td className="p-3 fw-semibold">
                      {element.ProductName}
                      <div className="d-sm-none">
                        <small className="text-muted">
                          {element.Category || "N/A"}
                        </small>
                      </div>
                      <div className="d-md-none">
                        <small className="text-muted">
                          {element.ProductBarcode}
                        </small>
                      </div>
                    </td>
                    <td className="p-3 text-success fw-bold">
                      ₹{element.ProductPrice.toLocaleString()}
                    </td>
                    <td className="p-3 text-info d-none d-md-table-cell">
                      {element.ProductBarcode}
                    </td>
                    <td className="p-3 d-none d-sm-table-cell">
                      {element.Category || "N/A"}
                    </td>
                    <td className="p-3">
                      <span
                        className={`badge ${
                          element.StockQuantity <= element.MinStockLevel
                            ? "bg-danger"
                            : "bg-success"
                        }`}
                      >
                        {element.StockQuantity || 0}
                      </span>
                    </td>
                    <td className="p-3">
                      <div className="d-flex gap-2">
                        <NavLink
                          to={`/updateproduct/${element._id}`}
                          className="btn btn-sm btn-outline-primary"
                        >
                          <FaEdit />
                        </NavLink>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => deleteProduct(element._id)}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
