import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">SP Korea 🇰🇷</h1>
            <p className="text-gray-600">Контакты</p>
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

        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Контакты</h1>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📞 Свяжитесь с нами</h2>
          
          <div className="space-y-4">
            <div>
              <strong className="text-gray-900">Telegram:</strong>
              <a href="https://t.me/spkorea_user_bot" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-2">
                @spkorea_user_bot
              </a>
            </div>
            
            <div>
              <strong className="text-gray-900">Почта:</strong>
              <a href="mailto:info@spkorea.ru" className="text-blue-600 hover:underline ml-2">
                info@spkorea.ru
              </a>
            </div>
            
            <div>
              <strong className="text-gray-900">Работаем:</strong>
              <span className="ml-2">Пн-Пт с 10:00 до 18:00 (МСК)</span>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Важно:</strong> Все заказы оформляются только через Telegram-бота.
              Пишите нам в бота для консультации, оформления заказа и отслеживания доставки.
            </p>
          </div>
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

export default Contact;