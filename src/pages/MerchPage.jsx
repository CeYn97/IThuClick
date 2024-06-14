import React from "react";
import "../styles/Merch.css";

import image1 from "../image/image 10.svg";
import image2 from "../image/image 2.svg";
import image3 from "../image/image 3.svg";
import image4 from "../image/image 4.svg";
import image7 from "../image/image 7.svg";
import image6 from "../image/image 6.svg";
import mainCoin from "../image/Coin.svg";

function MerchPage() {
  return (
    <div className="merch-container">
      <div className="merch-wrapper">
        <div className="merch-block">
          <p className="text_main">
            <img alt="menu icon" src={image1} className="merch_img" />
            <span>
              Худи <br /> «START GAME»
            </span>
          </p>
          <p className="text_footer">
            <img alt="menu icon" src={mainCoin} className="main_img" /> 800K
          </p>
        </div>
        <div className="merch-block">
          <p className="text_main">
            <img alt="menu icon" src={image2} className="merch_img" />
            <span>
              Худи <br /> «Я - ОГОНЬ»
            </span>
          </p>
          <p className="text_footer">
            <img alt="menu icon" src={mainCoin} className="main_img" /> 800K
          </p>
        </div>
        <div className="merch-block">
          <p className="text_main">
            <img alt="menu icon" src={image4} className="merch_img" />
            <span>Стикеры purple</span>
          </p>
          <p className="text_footer">
            <img alt="menu icon" src={mainCoin} className="main_img" /> 800K
          </p>
        </div>
        <div className="merch-block">
          <p className="text_main">
            <img alt="menu icon" src={image3} className="merch_img" />
            <span>
              Сумка <br /> «Poly Dino»
            </span>
          </p>
          <p className="text_footer">
            <img alt="menu icon" src={mainCoin} className="main_img" /> 800K
          </p>
        </div>
        <div className="merch-block">
          <p className="text_main">
            <img alt="menu icon" src={image7} className="merch_img" />
            <span>Поясная сумка</span>
          </p>
          <p className="text_footer">
            <img alt="menu icon" src={mainCoin} className="main_img" /> 800K
          </p>
        </div>
        <div className="merch-block">
          <p className="text_main">
            <img alt="menu icon" src={image6} className="merch_img" />
            <span>+3 Балла</span>
          </p>
          <p className="text_footer">
            <img alt="menu icon" src={mainCoin} className="main_img" /> 800K
          </p>
        </div>
      </div>
    </div>
  );
}

export default MerchPage;
