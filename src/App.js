import React, { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://sp-korea-api.onrender.com/api/products') // ✅ Работает!
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Ошибка загрузки товаров:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-xl text-gray-600">Загрузка товаров...</p>
      </div>
    );
  }

  const addToCart = (product) => {
    setCart(prev => {
      const item = prev.find(p => p.id === product.id);
      if (item) {
        return prev.map(p => 
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const openProduct = (product) => {
    // В контексте Telegram WebApp, откроем через WebApp.showPopup или передадим в бота
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.sendData(JSON.stringify({
        type: 'product_detail',
        product: product
      }));
    } else {
      alert(`Подробнее о: ${product.name}\n${product.description || 'Описание временно недоступно'}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">SP Korea 🇰🇷</h1>
            <p className="text-gray-600">Оригинальная корейская косметика</p>
          </div>
          <button 
            onClick={() => {
              if (window.Telegram?.WebApp) {
                window.Telegram.WebApp.sendData(JSON.stringify({
                  type: 'open_cart',
                  cart: cart
                }));
              } else {
                alert('Корзина: ' + cart.map(p => `${p.name} ×${p.quantity}`).join('\n') || 'Пусто');
              }
            }}
            className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-1 hover:bg-green-700"
          >
            <span>🛒</span>
            <span>Корзина</span>
            {cart.length > 0 && <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>}
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
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
                  <button 
                    onClick={() => openProduct(product)}
                    className="flex-1 bg-blue-600 text-white py-2 rounded text-sm hover:bg-blue-700"
                  >
                    🔍 Подробнее
                  </button>
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
}

export default App;