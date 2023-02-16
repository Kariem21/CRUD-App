import Navbar from "./components/Navbar.js";
import "./App.css";
import Sidebar from "./components/Sidebar.js";
import Home from "./pages/Home.js";
import Products from "./pages/Products.js";
import Categories from "./pages/Categories.js";
import ProductDetails from "./pages/ProductDetails.js";
import AddProduct from "./components/AddProduct.js";
import EditProduct from "./components/EditProduct.js";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <div className="col-2 sidebar">
          <Sidebar />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route
              path="/products/:productID"
              element={<ProductDetails />}
            ></Route>

            <Route path="/categories" element={<Categories />}></Route>
            <Route path="/products/addProduct" element={<AddProduct />}></Route>
            <Route
              path="/products/editProduct/:productID"
              element={<EditProduct />}
            ></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
