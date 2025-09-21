import React, { useState, useEffect } from 'react';
import Header from './Header';
import Cake from './Cake';
import Decorations from './Decorations';
import Modal from './Modal';
import './BirthdayCard.css';

const BirthdayCard = () => {
  const [showSparkles, setShowSparkles] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    setIsModalOpen(true);
    setTimeout(() => setShowSparkles(false), 1500);
  };

  const mensaje = `Aunque la distancia no nos permita celebrar juntas, quiero que sepas lo mucho que te quiero y lo importante que eres para mí. 
Gracias por tantos recuerdos compartidos y por ser esa amiga que siempre ilumina con su sonrisa.

Hoy te deseo un día lleno de amor, alegría y cosas bonitas, porque te mereces lo mejor del mundo. 
Prometo que, aunque no estemos cerca, mi cariño viaja hasta ti en cada palabra y en cada pensamiento. 🌸

Brindaré a la distancia por ti y por todos los momentos que aún nos faltan vivir juntas💖`;

  return (
    <div className="birthday-card" aria-label="Tarjeta de cumpleaños interactiva">
      <Header />
      <Decorations enabled={true} showSparkles={showSparkles} />
      <div onClick={handleCakeClick}>
        <Cake animationsEnabled={true} />
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {mensaje}
      </Modal>
    </div>
  );
};

export default BirthdayCard;