import React, { useEffect, useRef } from 'react';
import './MusicToggle.css';

const MusicToggle = ({ isPlaying, onToggle }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/sounds/happy-birthday.mp3');
      audioRef.current.loop = true;
    }
    
    if (isPlaying) {
      audioRef.current.play().catch(() => {
        // Handle autoplay restrictions
        onToggle();
      });
    } else {
      audioRef.current.pause();
    }
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [isPlaying, onToggle]);

  return (
    <button 
      className={`music-toggle ${isPlaying ? 'playing' : ''}`}
      onClick={onToggle}
      aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
    >
      {isPlaying ? '🎵' : '🔇'}
    </button>
  );
};

export default MusicToggle;