import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Catalog = ({ products, loading, addToCart }) => {
  console.log('Catalog props:', { products, loading, addToCart });
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-xl text-gray-600">Загрузка товаров...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">SP Korea 🇰🇷</h1>
            <p className="text-gray-600">Каталог товаров</p>
          </div>
          <Link 
            to="/cart"
            className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-1 hover:bg-green-700"
          >
            <span>🛒</span>
            <span>Корзина</span>
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Все товары</h2>
          <Link to="/" className="text-blue-600 hover:underline">← На главную</Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-64 object-cover"
                onError={(e) => e.target.src='https://via.placeholder.com/300x300?text=No+Image'}
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.brand} · {product.volume}</p>
                <p className="mt-2 text-lg font-bold text-green-600">{product.price_rub} ₽</p>
                <div className="mt-4 flex space-x-2">
                  <Link 
                    to={`/product/${product.id}`}
                    className="flex-1 bg-blue-600 text-white py-2 rounded text-sm hover:bg-blue-700 text-center"
                  >
                    🔍 Подробнее
                  </Link>
                  <button 
                    onClick={() => addToCart(product)}
                    className="flex-1 bg-green-600 text-white py-2 rounded text-sm hover:bg-green-700"
                  >
                    📦 В корзину
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Catalog;