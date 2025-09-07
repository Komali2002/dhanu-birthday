import React from "react";

export default function GameCard({ title, onClick }) {
  return (
    <div
      className="game-card"
      onClick={onClick}
      style={{
        border: "2px solid #ccc",
        borderRadius: "12px",
        padding: "20px",
        textAlign: "center",
        margin: "10px",
        cursor: "pointer",
        background: "linear-gradient(135deg, #f9a8d4, #fbcfe8)",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <h3>{title}</h3>
    </div>
  );
}
