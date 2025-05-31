import React from "react";
import {
  FaCheckCircle,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaBolt,
  FaChartBar,
  FaBoxOpen,
  FaBarcode,
  FaShoppingCart,
  FaBell,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="about-section py-4 py-lg-5">
      <div className="container">
        <h2 className="text-center mb-4 text-white fw-bold d-flex align-items-center justify-content-center">
          <FaBolt className="me-2 text-warning" />
          <span className="d-none d-sm-inline">
            Electronics Inventory Management System
          </span>
          <span className="d-sm-none">Electronics IMS</span>
        </h2>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="card shadow border-0 bg-dark text-white">
              <div className="card-body p-3 p-sm-4 p-lg-5">
                <h5 className="card-title mb-4 text-info fs-4">
                  Streamline Your Electronics Inventory
                </h5>
                <p className="card-text lead fs-6 fs-md-5">
                  Our Electronics IMS is a modern, feature-rich inventory
                  management system designed specifically for electronics
                  retailers and distributors. With real-time tracking, automated
                  alerts, and comprehensive reporting, you can manage your
                  inventory more efficiently than ever before.
                </p>

                <div className="row mt-4 mt-lg-5 g-4">
                  <div className="col-12 col-lg-6">
                    <h5 className="mb-3 mb-lg-4 text-info d-flex align-items-center">
                      <FaChartBar className="me-2" />
                      Key Features
                    </h5>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item bg-dark text-white border-secondary py-3">
                        <FaBoxOpen className="text-success me-2" />
                        Real-time stock tracking and updates
                      </li>
                      <li className="list-group-item bg-dark text-white border-secondary py-3">
                        <FaBarcode className="text-success me-2" />
                        Barcode-based product management
                      </li>
                      <li className="list-group-item bg-dark text-white border-secondary py-3">
                        <FaShoppingCart className="text-success me-2" />
                        Category-wise inventory organization
                      </li>
                      <li className="list-group-item bg-dark text-white border-secondary py-3">
                        <FaBell className="text-success me-2" />
                        Low stock alerts and notifications
                      </li>
                      <li className="list-group-item bg-dark text-white border-secondary py-3">
                        <FaChartBar className="text-success me-2" />
                        Advanced analytics and reporting
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-lg-6">
                    <h5 className="mb-3 mb-lg-4 text-info d-flex align-items-center">
                      <FaDatabase className="me-2" />
                      Technology Stack
                    </h5>
                    <div className="row g-3">
                      <div className="col-6">
                        <div className="card bg-secondary text-white border-0 h-100">
                          <div className="card-body text-center p-3">
                            <FaReact
                              size={28}
                              className="mb-2 mb-sm-3 text-info"
                            />
                            <h6 className="card-title mb-1">Frontend</h6>
                            <p className="card-text small mb-0">
                              React.js with Bootstrap
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="card bg-secondary text-white border-0 h-100">
                          <div className="card-body text-center p-3">
                            <FaNodeJs
                              size={28}
                              className="mb-2 mb-sm-3 text-success"
                            />
                            <h6 className="card-title mb-1">Backend</h6>
                            <p className="card-text small mb-0">
                              Node.js & Express
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="card bg-secondary text-white border-0">
                          <div className="card-body text-center p-3">
                            <FaDatabase
                              size={28}
                              className="mb-2 mb-sm-3 text-warning"
                            />
                            <h6 className="card-title mb-1">Database</h6>
                            <p className="card-text small mb-0">
                              MongoDB Atlas Cloud Database
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 mt-lg-5">
                  <h5 className="mb-3 mb-lg-4 text-info d-flex align-items-center">
                    <FaCheckCircle className="me-2" />
                    Benefits
                  </h5>
                  <div className="row g-3 g-lg-4">
                    <div className="col-12 col-md-4">
                      <div className="card bg-secondary text-white border-0 h-100">
                        <div className="card-body p-3">
                          <h6 className="card-title mb-2">Efficiency</h6>
                          <p className="card-text small mb-0">
                            Streamline operations with automated tracking and
                            alerts
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="card bg-secondary text-white border-0 h-100">
                        <div className="card-body p-3">
                          <h6 className="card-title mb-2">Accuracy</h6>
                          <p className="card-text small mb-0">
                            Minimize errors with digital record-keeping
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="card bg-secondary text-white border-0 h-100">
                        <div className="card-body p-3">
                          <h6 className="card-title mb-2">Insights</h6>
                          <p className="card-text small mb-0">
                            Make informed decisions with detailed analytics
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
