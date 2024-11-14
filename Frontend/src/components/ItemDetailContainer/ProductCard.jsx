import React from 'react';
import { Link } from 'react-router-dom';  

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.imagen[0]} alt={product.nombre} className="product-image" />
        <h4 className="product-name">{product.nombre}</h4>
        <p className="product-price">${product.precio}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
