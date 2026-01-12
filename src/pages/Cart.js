import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Cart = ({ cart, updateQuantity, removeFromCart }) => {
  const navigate = useNavigate();
  
  const totalPrice = cart.reduce((sum, item) => sum + (item.price_rub * item.quantity), 0);

  // Синхронизация с localStorage при изменении корзины
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleCheckout = async () => {
    console.log('Начало оформления заказа');
    
    const orderData = {
      type: 'checkout',
      order: cart.map(item => ({
        id: item.id,
        quantity: item.quantity
      })),
      total: totalPrice
    };
    
    console.log('Данные для отправки:', orderData);
    
    // Генерируем уникальный ID корзины
    const cartId = Date.now().toString();
    
    // Сохраняем в localStorage
    localStorage.setItem(`cart_${cartId}`, JSON.stringify(cart));
    
    try {
      // Отправляем корзину на наш API
      const response = await fetch('https://sp-korea-api.onrender.com/api/temp-cart/' + cartId, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData.order)
      });
      
      if (!response.ok) {
        throw new Error(`Ошибка сети: ${response.status}`);
      }
      
      console.log('✅ Корзина сохранена на сервере');
      
      // Формируем ссылку для перехода в бот
      const botUrl = `https://t.me/koreazakupkabot?start=order_${cartId}`;
      
      // Открываем бота
      window.open(botUrl, '_blank');
      
      // Показываем уведомление
      alert('Заказ сохранён! Откройте бота для подтверждения.');
      
    } catch (error) {
      console.error('❌ Ошибка при сохранении корзины:', error);
      alert('Не удалось сохранить заказ. Проверьте интернет и попробуйте ещё раз.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">SP Korea 🇰🇷</h1>
            <p className="text-gray-600">Корзина</p>
          </div>
          <button 
            onClick={() => navigate(-1)}
            className="text-blue-600 hover:underline"
          >
            ← Назад
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Ваша корзина</h2>
        
        {cart.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">Корзина пуста</p>
            <button 
              onClick={() => navigate('/catalog')}
              className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
            >
              Перейти в каталог
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center p-4 border-b last:border-b-0">
                <img 
                  src={item.image_url} 
                  alt={item.name} 
                  className="w-16 h-16 object-cover rounded"
                  onError={(e) => e.target.src='https://via.placeholder.com/60x60?text=No+Image'}
                />
                <div className="ml-4 flex-1">
                  <h3 className="font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-gray-600">{item.price_rub} ₽ × {item.quantity}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 text-red-600 hover:text-red-800"
                >
                  ✕
                </button>
              </div>
            ))}
            
            <div className="p-4 bg-gray-50 flex justify-between items-center font-bold text-lg">
              <span>Итого:</span>
              <span>{totalPrice} ₽</span>
            </div>
          </div>
        )}
        
        {cart.length > 0 && (
          <div className="mt-8 text-center">
            <button 
              onClick={handleCheckout}
              className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700"
            >
              Оформить заказ
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;