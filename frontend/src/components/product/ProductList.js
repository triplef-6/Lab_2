import React, { useEffect, useState } from 'react';
import apiClient from '../../apiClient'; // axios

const ProductList = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await apiClient.get('/api/product');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to load products');
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div>
      <h2>Товары</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Цена: {product.cost}$</p>
            <p>{product.url_product}</p>
            <button onClick={() => onAddToCart(product.id, product.cost, product.name)}>
                Добавить в корзину
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
