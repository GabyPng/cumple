import React, { useEffect } from 'react';
import './Decorations.css';

const Decorations = ({ enabled, showSparkles }) => {
  useEffect(() => {
    if (!enabled) return;
    
    const confettiInterval = setInterval(() => {
      createConfetti();
    }, 3000);

    const butterflyInterval = setInterval(() => {
      createButterfly();
    }, 4000);

    const heartInterval = setInterval(() => {
      createHeart();
    }, 2500);

    return () => {
      clearInterval(confettiInterval);
      clearInterval(butterflyInterval);
      clearInterval(heartInterval);
    };
  }, [enabled]);

  const createConfetti = () => {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
    confetti.style.backgroundColor = getRandomColor();
    document.querySelector('.decorations').appendChild(confetti);
    
    setTimeout(() => {
      confetti.remove();
    }, 5000);
  };

  const createButterfly = () => {
    const butterfly = document.createElement('div');
    butterfly.className = 'butterfly';
    butterfly.style.left = -50 + 'px';
    butterfly.style.top = Math.random() * 80 + 10 + 'vh';
    butterfly.style.animationDuration = (Math.random() * 2 + 6) + 's';
    document.querySelector('.decorations').appendChild(butterfly);
    
    setTimeout(() => {
      butterfly.remove();
    }, 8000);
  };

  const createHeart = () => {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
    heart.style.opacity = Math.random() * 0.5 + 0.5;
    document.querySelector('.decorations').appendChild(heart);
    
    setTimeout(() => {
      heart.remove();
    }, 5000);
  };

  const getRandomColor = () => {
    const colors = [
      '#FF69B4', // Hot Pink
      '#FF1493', // Deep Pink
      '#FFB6C1', // Light Pink
      '#FFC0CB', // Pink
      '#FF69B4', // Hot Pink
      '#DDA0DD', // Plum
      '#FFF0F5', // Lavender Blush
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="decorations" aria-hidden="true">
      {enabled && Array.from({ length: 20 }).map((_, i) => (
        <div 
          key={i} 
          className="star"
          style={{
            left: `${Math.random() * 100}vw`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 3 + 2}s`
          }}
        />
      ))}
      {enabled && Array.from({ length: 15 }).map((_, i) => (
        <div 
          key={i}
          className="pearl"
          style={{
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
          }}
        />
      ))}
      {showSparkles && enabled && Array.from({ length: 30 }).map((_, i) => (
        <div 
          key={`sparkle-${i}`}
          className="sparkle"
          style={{
            left: `${50 + (Math.random() - 0.5) * 60}%`,
            top: `${50 + (Math.random() - 0.5) * 60}%`,
            animationDelay: `${Math.random() * 0.5}s`
          }}
        />
      ))}
    </div>
  );
};

export default Decorations;