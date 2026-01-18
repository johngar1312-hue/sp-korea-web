// src/pages/Cart.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart, updateQuantity, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price_rub * item.quantity, 0);
  const [checkoutStep, setCheckoutStep] = useState('form'); // 'form' | 'success'
  const [cartId, setCartId] = useState(null);

  const handleCheckout = () => {
    // Генерируем уникальный ID заказа
    const newCartId = `order_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
    setCartId(newCartId);

    // Форматируем данные для API
    const cartToSend = cart.map(item => ({
      id: Number(item.id),
      article: item.article || "N/A",
      name: item.name,
      brand: item.brand,
      price_rub: Number(item.price_rub),
      quantity: Number(item.quantity),
      image_url: item.image_url
    }));

    fetch(`https://api.spkorea.online/api/temp-cart/${newCartId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: cartToSend,
        timestamp: new Date().toISOString()
      }),
    })
      .then(response => {
        if (response.ok) {
          setCheckoutStep('success');
        } else {
          alert('Ошибка сохранения заказа. Попробуйте позже.');
        }
      })
      .catch(err => {
        console.error('❌ Ошибка отправки заказа:', err);
        alert('Не удалось отправить заказ. Проверьте интернет.');
      });
  };

  if (cart.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">Корзина пуста</p>
        <Link to="/catalog" className="text-blue-600 hover:underline">Перейти в каталог</Link>
      </div>
    );
  }

  if (checkoutStep === 'success') {
    const botLink = `https://t.me/koreazakupkabot?start=${cartId}`;

    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-6">✅ Заказ сохранён!</h1>
        <p className="text-gray-700 mb-6">
          Администратор проверит наличие товаров в течение 24 часов.
        </p>
        <p className="text-gray-700 mb-8">
          Как всё будет готово — вы получите уведомление и ссылку на оплату.
        </p>

        <a
          href={botLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition font-medium"
          onClick={() => {
            if (window.Telegram?.WebApp) {
              window.Telegram.WebApp.openTelegramLink(botLink);
            }
          }}
        >
          💬 Перейти в бота
        </a>

        <div className="mt-8 p-4 bg-gray-100 rounded">
          <p className="text-sm text-gray-600">
            Ваш заказ: <code className="text-red-600">{cartId}</code>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Корзина</h1>
      <div className="space-y-4">
        {cart.map(item => (
          <div key={item.id} className="flex items-center border-b pb-4">
            <img src={item.image_url} alt={item.name} className="w-16 h-16 object-cover rounded" />
            <div className="ml-4 flex-1">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-gray-600">{item.price_rub} ₽ × {item.quantity}</p>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="px-2 bg-gray-200 rounded"
                disabled={item.quantity <= 1}
              >
                −
              </button>
              <span className="mx-2 w-8 text-center">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="px-2 bg-gray-200 rounded"
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="ml-4 text-red-600"
            >
              Удалить
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6 text-xl font-bold">Итого: {total} ₽</div>
      <button
        onClick={handleCheckout}
        className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
      >
        🛒 Оформить заказ
      </button>
    </div>
  );
};

export default Cart;
