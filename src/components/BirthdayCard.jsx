import React, { useState, useEffect } from 'react';
import Header from './Header';
import Cake from './Cake';
import Decorations from './Decorations';
import './BirthdayCard.css';

const BirthdayCard = () => {
  const [showSparkles, setShowSparkles] = useState(false);

  useEffect(() => {
    // Crear sparkles automáticamente cada cierto tiempo
    const interval = setInterval(() => {
      setShowSparkles(true);
      setTimeout(() => setShowSparkles(false), 1500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleCakeClick = () => {
    setShowSparkles(true);
    setTimeout(() => setShowSparkles(false), 1500);
  };

  return (
    <div className="birthday-card" aria-label="Tarjeta de cumpleaños interactiva">
      <Header />
      <Decorations enabled={true} showSparkles={showSparkles} />
      <div onClick={handleCakeClick}>
        <Cake animationsEnabled={true} />
      </div>
    </div>
  );
};

export default BirthdayCard;