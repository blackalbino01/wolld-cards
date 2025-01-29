'use client'
import { useEffect, useState } from "react";

export default function FloatingCards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const generateCards = () => {
      const newCards = [];
      for (let i = 0; i < 8; i++) {
        newCards.push({
          id: i,
          left: Math.random() * 80 + 10,
          top: Math.random() * 80 + 10,
          rotation: Math.random() * 360,
          delay: Math.random() * 3,
          duration: 4 + Math.random() * 3,
          scale: 0.8 + Math.random() * 0.4
        });
      }
      setCards(newCards);
    };

    generateCards();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {cards.map((card) => (
        <div
          key={card.id}
          className="absolute w-24 h-16 rounded-xl floating-card"
          style={{
            left: `${card.left}%`,
            top: `${card.top}%`,
            transform: `rotate(${card.rotation}deg) scale(${card.scale})`,
            animation: `float ${card.duration}s ease-in-out infinite`,
            animationDelay: `${card.delay}s`,
            background: 'linear-gradient(45deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.1)'
          }}
        />
      ))}
    </div>
  );
}
