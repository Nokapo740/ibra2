// src/Geolocation.js
import React, { useState, useEffect } from 'react';

const Geolocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (err) => {
            setError(err.message);
          }
        );
      } else {
        setError('Геолокация не поддерживается вашим браузером.');
      }
    };

    getLocation();
  }, []);

  return (
    <div>
      <h2>Геолокация пользователя</h2>
      {error && <p>Ошибка: {error}</p>}
      {location && (
        <div>
          <p>Широта: {location.latitude}</p>
          <p>Долгота: {location.longitude}</p>
        </div>
      )}
    </div>
  );
};

export default Geolocation;
