import React, { useEffect, useState } from 'react';
import apiClient from '../../apiClient'; // axios
import { useNavigate } from 'react-router-dom';

const CustomerProfile = ({ customerId }) => {
  const [customer, setCustomer] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await apiClient.get(`/api/customer/${customerId}`);
        setCustomer(response.data);
      } catch (error) {
        setError('Failed to load customer profile');
        console.error('Error fetching customer:', error);
      }
    };

    fetchCustomer();
  }, [customerId]);
  const handleGoToEdit = () => {
    navigate('/edit-profile');
  };
  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  if (!customer) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Профиль</h2>
      <p>Имя: {customer.name}</p>
      <p>Фамилия: {customer.surname}</p>
      <p>Email: {customer.email}</p>
      <button onClick={handleGoToEdit}>Изменить профиль</button>
    </div>
  );
};

export default CustomerProfile;
