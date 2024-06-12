import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import CopilkaPage from "./CopilkaPage";
import FriendsPage from "./FriendsPage";
import MerchPage from "./MerchPage";
import EarnPage from "./EarnPage";

function App() {
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const [level, setLevel] = useState(1);
  const [plusOnes, setPlusOnes] = useState([]);

  const incrementScore = (event) => {
    const newScore = score + 1;
    setScore(newScore);

    const clicksThisLevel = newScore % 100;
    const newProgress = (clicksThisLevel / 100) * 100;
    setProgress(newProgress);

    const { clientX, clientY } = event;
    const buttonRect = event.target.getBoundingClientRect();
    const x = clientX - buttonRect.left;
    const y = clientY - buttonRect.top;
    const newPlusOne = { id: Date.now(), x, y };
    setPlusOnes([...plusOnes, newPlusOne]);
  };

  useEffect(() => {
    if (score >= level * 100) {
      setLevel((prevLevel) => prevLevel + 1);
      setProgress(0); 
    }
    document.title = "ClickerHub";
  }, [score, level]);

  useEffect(() => {
    const timer = setInterval(() => {
      setPlusOnes((prevPlusOnes) => prevPlusOnes.slice(1));
    }, 1000);
    return () => clearInterval(timer);
  }, [plusOnes]);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>HubCoin</h1>
          <p className="App-intro">Бот</p>
        </header>
        <div className="Small-blocks">
          <div className="Small-block">Прибыль за клик</div>
          <div className="Small-block">Прибыль в час</div>
        </div>
        <div className="Score">Coins: {score}</div>
        <div className="Progress-bar-wrapper">
          <div className="Progress-bar-container">
            <div
              className="Progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="Level">level: {level}</div>
        </div>

        <button className="Click-button" onClick={incrementScore}>
          Кликни здесь!
          {plusOnes.map((plusOne) => (
            <div
              key={plusOne.id}
              className="plus-one"
              style={{ left: plusOne.x, top: plusOne.y }}
            >
              +1
            </div>
          ))}
        </button>
        <Routes>
          <Route path="/kopilka" element={<CopilkaPage />} />
          <Route path="/druzya" element={<FriendsPage />} />
          <Route path="/merch" element={<MerchPage />} />
          <Route path="/earn" element={<EarnPage />} />
        </Routes>
        <footer className="Footer">
          <Link to="/kopilka" className="Footer-item">
            Coinbox
          </Link>
          <Link to="/druzya" className="Footer-item">
            Friends
          </Link>
          <Link to="/merch" className="Footer-item">
            Merch
          </Link>
          <Link to="/earn" className="Footer-item">
            Earn
          </Link>
        </footer>
      </div>
    </Router>
  );
}

export default App;;
