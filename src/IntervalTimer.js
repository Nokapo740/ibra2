// src/IntervalTimer.js
import React, { useState, useEffect } from 'react';

const IntervalTimer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h3>Интервал таймер:</h3>
      <p>{seconds} секунд</p>
    </div>
  );
};

export default IntervalTimer;
