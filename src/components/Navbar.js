import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex justify-center space-x-8 flex-wrap">
          <Link to="/" className="text-gray-700 hover:text-gray-900 font-medium">Главная</Link>
          <Link to="/catalog" className="text-gray-700 hover:text-gray-900 font-medium">Каталог</Link>
          <Link to="/delivery" className="text-gray-700 hover:text-gray-900 font-medium">Доставка и оплата</Link>
          <Link to="/about" className="text-gray-700 hover:text-gray-900 font-medium">О нас</Link>
          <Link to="/contact" className="text-gray-700 hover:text-gray-900 font-medium">Контакты</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;