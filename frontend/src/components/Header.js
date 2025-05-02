import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const handleProfile = () => {
    navigate('/profile');
  };

  const handleGoToCart = () => {
    navigate('/cart');
  };

return (
    <header className="header">
      <nav className="nav">
        <div className="left-section">
          <button className="nav-button" onClick={handleGoToCart}>Корзина</button>
        </div>
        <div className="right-section">
          {isLoggedIn ? (
            <button className="nav-button" onClick={handleProfile}>Профиль</button>
          ) : (
            <>
              <button className="nav-button" onClick={handleLogin}>Вход</button>
              <button className="nav-button" onClick={handleRegister}>Регистрация</button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
