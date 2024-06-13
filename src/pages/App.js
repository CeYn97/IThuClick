import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import "../styles/App.css";
import FriendsPage from "./FriendsPage";
import MerchPage from "./MerchPage";
import EarnPage from "./EarnPage";

import shopIcon1 from "../image/Vector.svg";
import shopIcon2 from "../image/shop-svgrepo-com 1.svg";
import shopIcon3 from "../image/friendship-svgrepo-com 1.svg";
import shopIcon4 from "../image/list-clipboard-svgrepo-com.svg";
import mainVector from "../image/Main.svg";
import coin from "../image/Монета.svg";
import mainCoin from "../image/Group 6.svg";

import { getOrCreateUser, updateUser } from "../supabaseService";

function App() {
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const [level, setLevel] = useState(1);
  const [plusOnes, setPlusOnes] = useState([]);
  const [telegramId, setTelegramId] = useState(null);

  useEffect(() => {
    const id = window?.Telegram?.WebApp?.initDataUnsafe?.user?.id;
    setTelegramId(id);
    if (id) {
      getOrCreateUser(id)
        .then((userData) => {
          setScore(userData.coins);
          setLevel(userData.level);
          setProgress((userData.coins % 100) / 100 * 100);
        })
        .catch((error) => {
          console.error('Error fetching or creating user:', error);
        });
    }
  }, []);

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

    if (newScore >= level * 100) {
      setLevel((prevLevel) => prevLevel + 1);
      setProgress(0);
    }

    // Обновляем данные пользователя в Supabase
    if (telegramId) {
      updateUser(telegramId, newScore, newScore >= level * 100 ? level + 1 : level)
        .catch((error) => {
          console.error('Error updating user:', error);
        });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setPlusOnes((prevPlusOnes) => prevPlusOnes.slice(1));
    }, 1000);
    return () => clearInterval(timer);
  }, [plusOnes]);

  return (
    <Router>
      <div className="App">
        <main className="App-main">
          <Routes>
            <Route path="/druzya" element={<FriendsPage />} />
            <Route path="/merch" element={<MerchPage />} />
            <Route path="/earn" element={<EarnPage />} />
            <Route
              path="/"
              element={
                <>
                  <div className="Small-blocks">
                    <div className="Small-block">
                      Прибыль за тап
                      <div className="score__smallBlock">
                        <img
                          alt="menu icon"
                          src={coin}
                          className="coin__Style"
                        />
                        +1
                      </div>
                    </div>
                    <div className="Small-block score__smallBlock2">
                      Прибыль в час
                      <div className="score__div">+5к</div>
                    </div>
                  </div>

                  <div className="Score">
                    <img alt="menu icon" src={mainCoin} className="" />
                    {score}
                  </div>

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
                    <img
                      alt="menu icon"
                      src={mainVector}
                      className="main-vector"
                    />
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
                </>
              }
            />
          </Routes>
        </main>
        <footer className="Footer">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "Footer-item Footer-active" : "Footer-item"
            }
          >
            <img alt="menu icon" src={shopIcon1} className="Footer-icon" />
            Coinbox
          </NavLink>
          <NavLink
            to="/druzya"
            className={({ isActive }) =>
              isActive ? "Footer-item Footer-active" : "Footer-item"
            }
          >
            <img alt="menu icon" src={shopIcon3} className="Footer-icon" />
            Friends
          </NavLink>
          <NavLink
            to="/merch"
            className={({ isActive }) =>
              isActive ? "Footer-item Footer-active" : "Footer-item"
            }
          >
            <img alt="menu icon" src={shopIcon2} className="Footer-icon" />
            Merch
          </NavLink>
          <NavLink
            to="/earn"
            className={({ isActive }) =>
              isActive ? "Footer-item Footer-active" : "Footer-item"
            }
          >
            <img alt="menu icon" src={shopIcon4} className="Footer-icon" />
            Earn
          </NavLink>
        </footer>
      </div>
    </Router>
  );
}

export default App;

