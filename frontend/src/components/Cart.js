import React from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from './../apiClient';

const Cart = ({ cartItems, customerId, onPlaceOrder }) => {
  const navigate = useNavigate();

  const handlePlaceOrder = async () => {
    if (cartItems.length === 0) {
      alert('Корзина пуста');
    } else {
      for (const item of cartItems) {
        const orderDetails = {
          customerId: customerId,
          productId: item.productId,
          cost: item.cost,
        };

        try {
          await apiClient.post('/api/order', orderDetails);
        } catch (error) {
          console.error('Error placing order:', error);
          alert('Ошибка создания заказа');
          return;
        }
      }
      alert('Заказ создан успешно!');
      onPlaceOrder(); // Очистка корзины после размещения заказа
    }
  };

  const handleGoToProducts = () => {
    navigate('/products');
  };

  return (
    <div>
      <h2>Ваша корзина</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <p>Товар: {item.name}</p>
              <p>Cost: {item.cost}$</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Корзина пуста</p>
      )}
      {cartItems.length > 0 ? (
        <button onClick={handlePlaceOrder}>Создать заказ</button>
      ) : (
        <button onClick={handleGoToProducts}>Вернуться к товарам</button>
      )}
    </div>
  );
};

export default Cart;
