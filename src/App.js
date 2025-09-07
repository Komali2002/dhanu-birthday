import React, { useState, useRef } from "react";
import GameCard from "./components/GameCard";
import Memories from "./Memories";
import Letter from "./pages/Letter"; // ✅ Default import
import "./App.css";

export default function App() {
  const [confirmed, setConfirmed] = useState(false);
  const [activeGame, setActiveGame] = useState(null);
  const [showLetter, setShowLetter] = useState(false);
  const [answer, setAnswer] = useState("");
  const audioRef = useRef(null); // Ref for audio

  const checkAnswer = () => {
    if (answer.trim() === "2016") {
      setConfirmed(true);
      // Play audio after user interaction
      if (audioRef.current) {
        audioRef.current.play().catch((err) => console.log("Audio play failed:", err));
      }
    } else {
      alert("Oops! Try again 😅");
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        minHeight: "100vh",
        background: "linear-gradient(135deg,#fde68a,#f9a8d4)",
        overflow: "hidden",
      }}
    >
      {/* 🎶 Background Music */}
      <audio ref={audioRef} loop>
        <source src="/music/birthday.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* 🎈 Floating Balloons */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="balloon"
          style={{
            left: `${Math.random() * 90}%`,
            animationDuration: `${6 + Math.random() * 5}s`,
            fontSize: `${20 + Math.random() * 30}px`,
          }}
        >
          🎈
        </div>
      ))}

      {/* 1️⃣ Confirmation Question */}
      {!confirmed && !showLetter && (
        <div style={{ marginTop: "50px" }}>
          <h1>💖 Happy Birthday, My BestFriend 💖</h1>
          <p
            style={{
              fontSize: "18px",
              maxWidth: "600px",
              margin: "20px auto",
              lineHeight: "1.5",
            }}
          >
            On this special day, I just want to remind you how lucky I am to
            have you in my life. 🎉
          </p>

          <h3>Before you enter your Birthday Surprise... 🥰</h3>
          <p>Can you answer this? In which year did we first meet?</p>

          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Enter year"
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              marginRight: "10px",
            }}
          />
          <button
            onClick={checkAnswer}
            style={{
              padding: "10px 20px",
              borderRadius: "8px",
              background: "#f472b6",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Confirm 🎂
          </button>
        </div>
      )}

      {/* 2️⃣ Letter component */}
      {confirmed && !activeGame && showLetter && (
        <Letter onClose={() => setShowLetter(false)} />
      )}

      {/* 3️⃣ Game menu */}
      {confirmed && !activeGame && !showLetter && (
        <div>
          <h1>🎉 Welcome to Your Birthday Party 🎉</h1>
          <div
            style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
          >
            <GameCard title="Our Memories" onClick={() => setActiveGame("memories")} />
          </div>
        </div>
      )}

      {/* 4️⃣ Render selected game */}
      {activeGame === "memories" && <Memories />}

      {/* 5️⃣ Back button */}
      {(activeGame || showLetter) && (
        <button
          onClick={() => {
            setActiveGame(null);
            setShowLetter(false);
          }}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            borderRadius: "8px",
            background: "#fca5a5",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          ⬅ Back
        </button>
      )}
    </div>
  );
}
