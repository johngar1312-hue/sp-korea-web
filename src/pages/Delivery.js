import React from 'react';
import { Link } from 'react-router-dom';

const Delivery = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">SP Korea 🇰🇷</h1>
            <p className="text-gray-600">Доставка и оплата</p>
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

      <main className="max-w-3xl mx-auto px-4 py-8">
        <button 
          onClick={() => window.history.back()}
          className="text-blue-600 hover:underline mb-6 inline-block"
        >
          ← Назад
        </button>

        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Доставка и оплата</h1>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🚚 Доставка</h2>
          <ul className="space-y-3 text-gray-700">
            <li><strong>Способы доставки:</strong> СДЭК, Боксберри, Почта России</li>
            <li><strong>Сроки:</strong> 3-7 дней по всей России</li>
            <li><strong>Бесплатно:</strong> при заказе от 5000 ₽</li>
            <li><strong>Стоимость:</strong> от 300 ₽ (зависит от региона и веса)</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">💳 Оплата</h2>
          <ul className="space-y-3 text-gray-700">
            <li><strong>Способ:</strong> Только по СБП (Система быстрых платежей)</li>
            <li><strong>Реквизиты:</strong> Номер карты, банк, ФИО получателя</li>
            <li><strong>Чек:</strong> После оплаты отправьте чек в бота</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📦 Сборка заказа</h2>
          <p className="text-gray-700">
            После оплаты мы собираем ваш заказ в течение 1-2 рабочих дней 
            и отправляем его. Вы получите трек-номер для отслеживания.
          </p>
        </div>

        <div className="text-center mt-8">
          <Link 
            to="/catalog" 
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 inline-block"
          >
            Перейти в каталог
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Delivery;