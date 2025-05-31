import React from "react";
import { NavLink } from "react-router-dom";
import { FaBoxes, FaHome, FaInfoCircle } from "react-icons/fa";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark border-bottom border-secondary sticky-top">
      <div className="container-fluid px-3 px-sm-4">
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <FaBoxes className="me-2" />
          {props.title}
        </NavLink>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link d-flex align-items-center ${
                    isActive ? "active" : ""
                  }`
                }
                to="/"
              >
                <FaHome className="me-2" />
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link d-flex align-items-center ${
                    isActive ? "active" : ""
                  }`
                }
                to="/products"
              >
                <FaBoxes className="me-2" />
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link d-flex align-items-center ${
                    isActive ? "active" : ""
                  }`
                }
                to="/about"
              >
                <FaInfoCircle className="me-2" />
                {props.about}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
