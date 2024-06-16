import React from "react";
import "../styles/FriendsPage.css";

import Gift1 from "../image/Gift1.svg";
import Gift2 from "../image/Gift2.svg";
import Copy from "../image/Copy.svg";
// import mainCoin from "../image/Coin.svg";

function FriendsPage() {
  return (
    <div className="container">
      <div className="header">
        <h1>Пригласите друзей!</h1>
        <p>Вы и ваш друг получите бонусы</p>
      </div>
      <div className="invite-card">
        <img src={Gift1} alt="Gift Icon" />

        <div>
          <h2>Пригласить друга</h2>
          <p>
            <span>+5 000</span> для вас и вашего друга
          </p>
        </div>
      </div>
      <div className="invite-card">
        <img src={Gift2} alt="Gift Icon" />

        <div>
          <h2>Пригласить друга с Telegram Premium</h2>
          <p>
            <span>+25 000</span> для вас и вашего друга
          </p>
        </div>
      </div>
      <div className="more-bonuses">Больше бонусов</div>
      <div className="friends-list">
        <h2>Список ваших друзей</h2>
        <p>Вы еще никого не пригласили</p>
      </div>
      <div className="invite-buttons">
        <div className="invite-button">
          <button className="button1">Пригласить друга</button>
        </div>
        <div className="invite-button">
          <button className="button2">
            <img alt="copy-img" src={Copy} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FriendsPage;
