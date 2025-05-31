import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaBoxOpen,
  FaDollarSign,
  FaExclamationTriangle,
  FaStar,
  FaTags,
} from "react-icons/fa";
import config from "../config";
// import "./Dashboard.css";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalValue: 0,
    lowStock: 0,
    highValue: 0,
    categoryDistribution: {},
    topProducts: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardStats = async () => {
      try {
        const response = await axios.get(config.endpoints.dashboard);
        setStats(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching dashboard stats:", error);
        setLoading(false);
      }
    };
    fetchDashboardStats();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-modern container-fluid py-4 py-lg-5">
      <h2
        className="text-center mb-4 mb-lg-5 fw-bold text-white"
        style={{ letterSpacing: 1 }}
      >
        Dashboard Overview
      </h2>
      <div className="row g-3 g-xl-4 justify-content-center">
        <div className="col-6 col-md-3">
          <div className="card shadow border-0 stat-card bg-gradient-primary text-white h-100">
            <div className="card-body p-3 text-center">
              <FaBoxOpen size={24} className="mb-2" />
              <h5 className="card-title mt-2 fs-6">Total Products</h5>
              <h2 className="display-6 fw-bold mb-0">{stats.totalProducts}</h2>
              <p className="card-text small mb-0">Items in inventory</p>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card shadow border-0 stat-card bg-gradient-success text-white h-100">
            <div className="card-body p-3 text-center">
              <FaDollarSign size={24} className="mb-2" />
              <h5 className="card-title mt-2 fs-6">Total Value</h5>
              <h2 className="display-6 fw-bold mb-0">
                ₹{stats.totalValue.toLocaleString()}
              </h2>
              <p className="card-text small mb-0">Total inventory value</p>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card shadow border-0 stat-card bg-gradient-warning text-white h-100">
            <div className="card-body p-3 text-center">
              <FaExclamationTriangle size={24} className="mb-2" />
              <h5 className="card-title mt-2 fs-6">Low Stock Items</h5>
              <h2 className="display-6 fw-bold mb-0">{stats.lowStock}</h2>
              <p className="card-text small mb-0">Items below minimum</p>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card shadow border-0 stat-card bg-gradient-info text-white h-100">
            <div className="card-body p-3 text-center">
              <FaStar size={24} className="mb-2" />
              <h5 className="card-title mt-2 fs-6">High Value Items</h5>
              <h2 className="display-6 fw-bold mb-0">{stats.highValue}</h2>
              <p className="card-text small mb-0">Items over ₹50,000</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4 mt-lg-5 g-4">
        <div className="col-12 col-lg-6">
          <div className="card shadow border-0 h-100">
            <div className="card-body p-3 p-lg-4">
              <h5 className="card-title mb-3 mb-lg-4 d-flex align-items-center">
                <FaTags className="me-2 text-primary" />
                Top Value Products
              </h5>
              <div className="list-group list-group-flush">
                {stats.topProducts.map((product) => (
                  <div
                    key={product._id}
                    className="list-group-item bg-dark text-white border-secondary py-3"
                  >
                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                      <div>
                        <h6 className="mb-1 fw-bold">{product.ProductName}</h6>
                        <small className="text-muted">
                          {product.Category} | Stock: {product.StockQuantity}
                        </small>
                      </div>
                      <span className="badge bg-primary rounded-pill fs-6">
                        ₹{product.ProductPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="card shadow border-0 h-100">
            <div className="card-body p-3 p-lg-4">
              <h5 className="card-title mb-3 mb-lg-4 d-flex align-items-center">
                <FaTags className="me-2 text-success" />
                Category Distribution
              </h5>
              <div className="row g-3">
                {Object.entries(stats.categoryDistribution).map(
                  ([category, count]) => (
                    <div key={category} className="col-6 col-sm-4">
                      <div className="card bg-dark border-secondary text-white h-100">
                        <div className="card-body p-3 text-center">
                          <h6 className="card-title mb-2 text-truncate">
                            {category}
                          </h6>
                          <p className="display-6 mb-0">{count}</p>
                          <small className="text-muted">Products</small>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
