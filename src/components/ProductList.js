import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
    <h1 className="text-3xl font-semibold tracking-tight mb-4">
      Product List
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <div
          className="bg-white overflow-hidden shadow rounded-lg hover:shadow-xl transition-shadow duration-300"
          key={product.id}
        >
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {product.title}
            </h2>
            <p className="mt-2 text-gray-600">{product.description}</p>
            <p className="mt-2 text-gray-600">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default ProductList;
