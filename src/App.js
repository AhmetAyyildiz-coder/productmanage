import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import axios from "axios";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import ProductForm from "./components/ProductForm";
import Navbar from "./components/Navbar";
import Dashboard from './components/Dashboard';

function App() {


  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/products").then((response) => {
      setProducts(response.data);
    });
  }, []);


  return (
    <BrowserRouter>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Product List</Link>
          </li>
          <li>
            <Link to="/add">Add Product</Link>
          </li>
        </ul>
      </nav> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path="/products" element={<ProductList products={products} />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/add" element={<ProductForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
