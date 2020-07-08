import React from "react";
import "./TitleSections.css";

const TitleSections = ({ title, icon }) => {
  return (
    <div className="user-display">
      <h3 className="user">{title}</h3>
      <i className={icon}></i>
    </div>
  );
};

export default TitleSections;
