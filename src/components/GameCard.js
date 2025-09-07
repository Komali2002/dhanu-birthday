import React from "react";

export default function GameCard({ title, onClick }) {
  return (
    <div className="game-card" onClick={onClick}>
      <h2>{title}</h2>
  
    </div>
  );
}
