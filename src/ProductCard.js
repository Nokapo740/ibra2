// src/ProductCard.js
import React from 'react';

const ProductCard = ({ name, price, description }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Цена: {price}</p>
      <p>Описание: {description}</p>
    </div>
  );
};

export default ProductCard;
