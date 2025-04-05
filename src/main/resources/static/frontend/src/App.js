import React, { useState } from 'react';
import LoginComponent from './components/customer/LoginComponent';
import CustomerProfile from './components/customer/CustomerProfile';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [customerId, setCustomerId] = useState(null);

  const handleSuccessfulLogin = (id) => {
    setIsLoggedIn(true);
    setCustomerId(id);
  };

  return (
    <div>
      {isLoggedIn ? (
        <CustomerProfile customerId={customerId} />
      ) : (
        <LoginComponent onLoginSuccess={handleSuccessfulLogin} />
      )}
    </div>
  );
};

export default App;
