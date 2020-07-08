import React from "react";
import ProgressRing from "../progressBar/ProgressRing";

import "./GoalsView.css";

const GoalsView = ({ img, title, radius, progress, amount, goal }) => {
  return (
    <div className="goal_view">
      <img src={img} alt="" />
      <h3>{title}</h3>
      <div style={{ display: "flex", position: "relative" }}>
        <ProgressRing radius={radius} stroke="3" progress={progress} />
        <div className="amounts">
          <p>${amount}</p>
          <span>${goal}</span>
        </div>
      </div>
    </div>
  );
};

export default GoalsView;
