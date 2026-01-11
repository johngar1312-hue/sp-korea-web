import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">SP Korea 🇰🇷</h1>
            <p className="text-gray-600">О нас</p>
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

        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">О нас</h1>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🇰🇷 SP Korea</h2>
          <p className="text-gray-700 mb-4">
            Мы — официальные поставщики оригинальной корейской косметики напрямую из Сеула.
            Работаем с 2023 года, более 1000 довольных клиентов по всей России.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Наши преимущества:</h3>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li>✅ Гарантия подлинности — только оригинальные товары</li>
            <li>✅ Сертификаты качества на всю продукцию</li>
            <li>✅ Быстрая доставка — 3-7 дней по РФ</li>
            <li>✅ Удобная оплата — только по СБП</li>
            <li>✅ Персональный менеджер в Telegram</li>
          </ul>

          <p className="text-gray-700">
            Наша миссия — сделать корейскую косметику доступной для каждого.
            Мы отбираем только лучшие бренды: OHUI, The History of Whoo, su:m37, CNP.
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

export default About;