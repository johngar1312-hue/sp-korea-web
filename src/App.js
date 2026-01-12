import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Delivery from './pages/Delivery';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Toast from './components/Toast';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [toast, setToast] = useState({ message: '', isVisible: false });

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

  const addToCart = (product) => {
    setCart(prev => {
      const item = prev.find(p => p.id === product.id);
      let newCart;
      if (item) {
        newCart = prev.map(p => 
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        newCart = [...prev, { ...product, quantity: 1 }];
        // Показываем тост при первом добавлении
        setToast({ message: `Товар добавлен: ${product.name}`, isVisible: true });
      }
      // Сохраняем в localStorage
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  const closeToast = () => {
    setToast({ message: '', isVisible: false });
  };

  const updateQuantity = (productId, newQuantity) => {
    setCart(prev => {
      const newCart = prev.map(item => 
        item.id === productId ? { ...item, quantity: newQuantity } : item
      ).filter(item => item.quantity > 0);
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => {
      const newCart = prev.filter(item => item.id !== productId);
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  };



  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog products={products} loading={loading} addToCart={addToCart} cart={cart} updateQuantity={updateQuantity} />} />
          <Route path="/product/:id" element={<ProductDetail products={products} addToCart={addToCart} cart={cart} updateQuantity={updateQuantity} />} />
          <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Toast message={toast.message} isVisible={toast.isVisible} onClose={closeToast} />
      </div>
    </Router>
  );
}

export default App;