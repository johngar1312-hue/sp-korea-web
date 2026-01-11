import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import SanitizedDescription from '../components/SanitizedDescription';

const ProductDetail = ({ products, addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Товар не найден</h2>
          <Link to="/catalog" className="text-blue-600 hover:underline mt-4 inline-block">
            ← Вернуться в каталог
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">SP Korea 🇰🇷</h1>
            <p className="text-gray-600">{product.name}</p>
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

      <main className="max-w-4xl mx-auto px-4 py-8">
        <button 
          onClick={() => navigate(-1)}
          className="text-blue-600 hover:underline mb-4 inline-block"
        >
          ← Назад
        </button>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-96 object-cover"
                onError={(e) => e.target.src='https://via.placeholder.com/500x500?text=No+Image'}
              />
            </div>
            <div className="md:w-1/2 p-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-gray-600 mb-4">{product.brand}</p>
              
              {product.volume && <p className="text-sm text-gray-500 mb-2"><strong>Объём:</strong> {product.volume}</p>}
              <p className="text-lg font-bold text-green-600 mb-6">{product.price_rub} ₽</p>
              
              <SanitizedDescription html={product.description || 'Полное описание временно недоступно. Свяжитесь с администратором для уточнения деталей.'} />

              <div className="flex space-x-4">
                <button 
                  onClick={() => addToCart(product)}
                  className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700"
                >
                  📦 Добавить в корзину
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;