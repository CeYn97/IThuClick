import React from "react";
import "../styles/Earn.css";

import YouTube from "../image/YouTube.svg";
import Plus from "../image/Plus.svg";
import mainCoin from "../image/Coin.svg";

function EarnPage() {
  return (
    <div className="container">
      <div className="header">
        <img alt="Coin" src={mainCoin} className="coin-image" />
      </div>
      <div className="title">Выполни квест и получи монеты</div>

      <div className="section-title">IThub Youtube</div>
      <div className="quest">
        <img src={YouTube} alt="Youtube Icon" className="icon" />
        <div className="details">
          <span>Новое видео</span>
          <span className="blocks">
            <img src={mainCoin} alt="Coin Icon" className="small-icon" />
            <div className="bonus">+100 000</div>
          </span>
        </div>
      </div>
      <div className="quest">
        <img src={YouTube} alt="Youtube Icon" className="icon" />
        <div className="details">
          <span>Новое видео</span>
          <span className="blocks">
            <img src={mainCoin} alt="Coin Icon" className="small-icon" />
            <div className="bonus">+100 000</div>
          </span>
        </div>
      </div>

      <div className="section-title">Ежедневные задания</div>
      <div className="quest">
        <img src={Plus} alt="Daily Icon" className="icon" />
        <div className="details">
          <span>Ежедневная награда</span>
          <span className="blocks">
            <img src={mainCoin} alt="Coin Icon" className="small-icon" />
            <div className="bonus">+5 000 000</div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default EarnPage;
