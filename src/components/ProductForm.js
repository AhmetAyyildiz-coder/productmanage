import React, { useState } from "react";
import axios from "axios";

const ProductForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = { name, description, price };
    axios.post("http://localhost:3001/products", product).then((response) => {
      console.log(response.data);
    });
    setName("");
    setDescription("");
    setPrice("");
  };

  return (
   
     
      
    
     
       
     
     
     
     
     



    <form  onSubmit={handleSubmit} className="max-w-lg mx-auto mt-6">
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="title"
      >
        Title
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="description"
      >
        Description
      </label>
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        value={description}
        rows={3}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
    </div>
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="price"
      >
        Price
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
    </div>
    <div className="mb-4">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Add Product
      </button>
    </div>
  </form>
  );
};

export default ProductForm;
