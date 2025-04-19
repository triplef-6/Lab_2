import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Header.css";

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

  const handleCart = () => {
    navigate('/cart');
  };

  return (
    <header className="header">
      <nav className='nav'>
        <nav className='nav-button left-button' onClick={handleCart}>Корзина</nav>
        <div className='right-button'>
          {isLoggedIn ? (
            <button onClick={handleProfile}>Профиль</button>
          ) : (
            <>
              <button onClick={handleLogin}>Вход</button>
              <button onClick={handleRegister}>Регистрация</button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
