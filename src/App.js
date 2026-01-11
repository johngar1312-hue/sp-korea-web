import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Toast from './components/Toast';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
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
      if (item) {
        return prev.map(p => 
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      // Показываем тост при первом добавлении
      setToast({ message: `Товар добавлен: ${product.name}`, isVisible: true });
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const closeToast = () => {
    setToast({ message: '', isVisible: false });
  };

  const updateQuantity = (productId, newQuantity) => {
    setCart(prev => 
      prev.map(item => 
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog products={products} loading={loading} addToCart={addToCart} cart={cart} updateQuantity={updateQuantity} />} />
          <Route path="/product/:id" element={<ProductDetail products={products} addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} />
        </Routes>
        <Toast message={toast.message} isVisible={toast.isVisible} onClose={closeToast} />
      </div>
    </Router>
  );
}

export default App;