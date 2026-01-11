import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">SP Korea 🇰🇷</h1>
            <p className="text-gray-600">Оригинальная корейская косметика</p>
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
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Добро пожаловать в SP Korea!</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы поставляем оригинальную корейскую косметику напрямую из Сеула. 
            Гарантия подлинности, быстрая доставка по всей России.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Как заказать?</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">1️⃣</span>
              </div>
              <h4 className="font-semibold mb-2">Выберите товары</h4>
              <p className="text-gray-600 text-sm">Добавьте понравившиеся товары в корзину</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">2️⃣</span>
              </div>
              <h4 className="font-semibold mb-2">Оформите заказ</h4>
              <p className="text-gray-600 text-sm">Перейдите в корзину и нажмите "Оформить заказ"</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">3️⃣</span>
              </div>
              <h4 className="font-semibold mb-2">Оплатите</h4>
              <p className="text-gray-600 text-sm">Оплатите по СБП по реквизитам из бота</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">4️⃣</span>
              </div>
              <h4 className="font-semibold mb-2">Получите</h4>
              <p className="text-gray-600 text-sm">Мы отправим заказ, вы получите трек-номер</p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg shadow-sm p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Готовы начать?</h3>
          <p className="mb-6">Откройте каталог и выберите первые товары!</p>
          <Link 
            to="/catalog"
            className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 inline-block"
          >
            Перейти в каталог
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Home;