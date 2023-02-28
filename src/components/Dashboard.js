import React from 'react';
import { useEffect, useState } from 'react';
import { getProducts , getCategories } from '../api/product';
function Dashboard() {
    const [products, setProducts] = useState([]);
    const [category, setcategory] = useState([]);



    useEffect(() => {
        getProducts().then((data) => setProducts(data));
        getCategories().then((data) => setcategory(data));
    }, []);

    const productCount = products.length;
    
    return (
        <div className="flex">
            <div className="w-1/2 bg-gray-100 p-4 rounded-lg shadow-lg">
                <h2 className="text-2xl mb-4 font-bold text-gray-800">
                    Toplam Ürün Sayısı
                </h2>
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white text-2xl font-bold">
                    {productCount}
                </div>
            </div>
            <div className="w-1/2 bg-gray-100 p-4 rounded-lg shadow-lg ml-4">
                <h2 className="text-2xl mb-4 font-bold text-gray-800">
                    Toplam Ürün Çeşidi Sayısı
                </h2>
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-pink-500 text-white text-2xl font-bold">
                    {5}
                </div>
            </div>
            <div className="w-full mt-4">
                <h2 className="text-2xl mb-4 font-bold text-gray-800">
                    Ürün Kategorileri
                </h2>
                <ul className="grid grid-cols-2 gap-4">
                    {category.map((c) => (
                        <li key={c.id} className="border p-4 rounded-md">
                            <h3 className="text-lg font-bold mb-2">
                                {c.name}
                            </h3>
                            <p className="text-gray-700">
                                {c.desc}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Dashboard;
