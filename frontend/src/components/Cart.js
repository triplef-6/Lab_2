import React from 'react';
import apiClient from './../apiClient';

const Cart = ({ cartItems, customerId, onPlaceOrder }) => {
const handlePlaceOrder = async () => {
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
        alert('Failed to place order for some items');
        return;
      }
    }
    alert('Order placed successfully!');
    onPlaceOrder(); // Очистка корзины после размещения заказа
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
      <button onClick={handlePlaceOrder}>Сделать заказ</button>
    </div>
  );
};

export default Cart;
