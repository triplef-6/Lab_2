import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../../apiClient'; // axios

const LoginComponent = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await apiClient.post('api/customer/login', { email, password });
      console.log('Login successful:', response.data);
      onLoginSuccess(response.data.id);
        navigate('/');
    } catch (error) {
      setError('Фатальная ошибка в email или password!');
      console.error('Login error:', error);
    }
  };

  const handleGoToRegister = () => {
    navigate('/register');
  }

  return (
    <div>
      <h2>Вход</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleGoToRegister}>Регистрация</button>
      <button onClick={handleLogin}>Вход</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default LoginComponent;
