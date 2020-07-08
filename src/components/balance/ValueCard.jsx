import React from "react";

import girl from "../../img-girl.png";

import "./ValueCard.css";

const ValueCard = () => {
  return (
    <div className="valuecard">
      <img src={girl} alt="" />
      <h2>
        Eres <br />
        estratega
      </h2>
      <div>
        <span>Tu Saldo</span>
        <p>$1.570.000</p>
      </div>
    </div>
  );
};

export default ValueCard;
