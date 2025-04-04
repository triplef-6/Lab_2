import React, { useEffect, useState } from 'react';
import apiClient from '../../apiClient'; // Импортируем созданный экземпляр axios

const CustomerProfile = ({ customerId }) => {
  const [customer, setCustomer] = useState(null);
  const [error, setError] = useState('');

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

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  if (!customer) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Customer Profile</h2>
      <p>Name: {customer.name}</p>
      <p>Surname: {customer.surname}</p>
      <p>Email: {customer.email}</p>
    </div>
  );
};

export default CustomerProfile;
