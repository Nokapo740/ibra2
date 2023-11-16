// src/Gallery.js
import React, { useState } from 'react';

const Gallery = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div>
      <h2>Галерея</h2>
      <div>
        <button onClick={handlePrevClick}>Предыдущее изображение</button>
        <img src={images[currentImageIndex]} alt={`Изображение ${currentImageIndex + 1}`} />
        <button onClick={handleNextClick}>Следующее изображение</button>
      </div>
    </div>
  );
};

export default Gallery;
