import React, { useState } from 'react';
import apiClient from '../../apiClient';
import { useNavigate } from 'react-router-dom';

const EditCustomerProfile = ({ customerId }) => {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEdit = async () => {
    try {
      const response = await apiClient.post(`/api/customer/${customerId}`, { name, surname, email, password });
      console.log('Профиль успешно изменён:', response.data);
      navigate('/profile'); 
    } catch (error) {
      setError('Failed. Please try again.');
      console.error('Error:', error);
    }
  };
  // useEffect(() => {
  //   const handleEdit  = async () => {
  //     try {
        // const response = await apiClient.post('/api/customer/${customerId}', { name, surname, email, password });
  //       console.log('Профиль успешно изменён:', response.data);
  //       navigate('/profile'); 
  //     } catch (error) {
  //       setError('Failed. Please try again.');
  //       console.error('Error:', error);
  //     }
  //   };
  //
  //   fetchCustomer();
  // }, [customerId]);


  return (
    <div>
      <h2>Изменение профиля</h2>
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
      <button onClick={handleEdit}>Изменить профиль</button>
      {error && <p className="error">{error}</p>}
    </div>

  );
};

export default EditCustomerProfile;





  
