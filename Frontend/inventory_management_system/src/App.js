import "./App.css";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import InsertProduct from "./components/InsertProduct";
import UpdateProduct from "./components/UpdateProduct";
import About from "./components/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App bg-dark min-vh-100">
      <Router>
        <Navbar title="Electronics IMS" about="About" />
        <main className="container-fluid px-3 px-sm-4 pb-4">
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/insertproduct" element={<InsertProduct />} />
            <Route path="/updateproduct/:id" element={<UpdateProduct />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
