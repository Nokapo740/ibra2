
import './AnimatedBanner.css'; 
import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedBanner = () => {
  const animationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
    reverse: true,
    onRest: () => {
      // Логика, которая будет выполнена после завершения анимации (если необходимо)
    },
  });

  return (
    <animated.div style={animationProps} className="animated-banner">
      <h2>Анимированный баннер</h2>
      <p>Привлеките внимание пользователя с помощью красочной анимации!</p>
    </animated.div>
  );
};

export default AnimatedBanner;
