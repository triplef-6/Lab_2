import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginComponent from './components/customer/LoginComponent';
import CustomerProfile from './components/customer/CustomerProfile';
import ProductList from './components/product/ProductList';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [customerId, setCustomerId] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const handleSuccessfulLogin = (id) => {
    setIsLoggedIn(true);
    setCustomerId(id);
  };
  const handleAddToCart = (productId, cost, name) => {
    setCartItems([...cartItems, { productId, cost, name }]);
  };

  const handlePlaceOrder = () => {
    setCartItems([]); // Очистка корзины после размещения заказа
  };
  return (
     <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={
            isLoggedIn ? <CustomerProfile customerId={customerId} /> : <Navigate to="/login" />
          } />
          <Route path="/products" element={<ProductList onAddToCart={handleAddToCart} />} />
          <Route path="/login" element={<LoginComponent onLoginSuccess={handleSuccessfulLogin} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} customerId={customerId} onPlaceOrder={handlePlaceOrder} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
