import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      {/* Бургер-иконка */}
      <button
        onClick={toggleMenu}
        className="text-gray-700 hover:text-gray-900 focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Мобильное меню */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-50">
          <div className="px-4 py-2 space-y-1">
            <Link
              to="/"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
              onClick={closeMenu}
            >
              Главная
            </Link>
            <Link
              to="/catalog"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
              onClick={closeMenu}
            >
              Каталог
            </Link>
            <Link
              to="/delivery"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
              onClick={closeMenu}
            >
              Доставка и оплата
            </Link>
            <Link
              to="/about"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
              onClick={closeMenu}
            >
              О нас
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
              onClick={closeMenu}
            >
              Контакты
            </Link>
            <Link
              to="/cart"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded font-medium"
              onClick={closeMenu}
            >
              🛒 Корзина
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;