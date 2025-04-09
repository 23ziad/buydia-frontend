
import React, { useState, useEffect } from 'react';
import './ProductList.css';
import { useParams } from 'react-router-dom';

function ProductList() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/category/${category}`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => setError('Failed to load products'));
  }, [category]);

  return (
    <div className="product-grid-container">
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      {error && <p className="error-msg">{error}</p>}
      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product._id}>
            <img src={product.image || 'https://via.placeholder.com/80'} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.price} EGP</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
