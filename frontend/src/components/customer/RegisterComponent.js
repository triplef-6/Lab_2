import React, { useState } from 'react';
import apiClient from '../../apiClient';
import { useNavigate } from 'react-router-dom';

const RegisterComponent = () => {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await apiClient.post('/api/customer', { name, surname, email, password });
      console.log('Регистрация успешна:', response.data);
      navigate('/login'); // Перенаправление на страницу входа после успешной регистрации
    } catch (error) {
      setError('Registration failed. Please try again.');
      console.error('Registration error:', error);
    }
  };

  return (
    <div>
      <h2>Регистрация</h2>
      <input
        type="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="surname"
        placeholder="Surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />
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
      <button onClick={handleRegister}>Регистрация</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default RegisterComponent;
