import React from 'react';
import './Cake.css';

const Cake = ({ animationsEnabled }) => {
  return (
    <div className="birthday-cake" role="img" aria-label="Pastel de cumpleaños con vela encendida">
      <div className="candle">
        <div className={`fire ${animationsEnabled ? 'animated' : ''}`}>
          <div className={`inner-fire ${animationsEnabled ? 'animated' : ''}`}></div>
        </div>
      </div>
      <div className="extra"></div>
      <div className="cake">
        <div className="top"></div>
      </div>
      <div className="base">
        <div className="base-1"></div>
        <div className="base-2"></div>
        <div className="base-3"></div>
      </div>
    </div>
  );
};

export default Cake;