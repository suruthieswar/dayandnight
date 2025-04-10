import React, { useState } from "react";
import "./App.css";

function App() {
  const [isNight, setIsNight] = useState(true);

  const toggleTheme = () => {
    setIsNight(!isNight);
  };

  return (
    <div className={`container ${isNight ? "night" : "light"}`}>
      <h1>AI Study Buddy</h1>
      <h2>A New Way to Learn</h2>
      <p>
        AI Study Buddy helps you enhance your skills, track your growth, and
        get ready for tech interviews — all in one place.
      </p>
      <button>Create Account</button>
      <p className="cta">Start exploring now and level up! 🚠️</p>
      <i
        className={`bi ${isNight ? "bi-moon" : "bi-brightness-high-fill"}`}
        onClick={toggleTheme}
      ></i>
    </div>
  );
}

export default App;
