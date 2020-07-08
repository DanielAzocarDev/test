import React from "react";

import "./InvestSummary.css";

const InvestSummary = () => {
  return (
    <div className="invest_summary">
      <div>
        <span>Inversion</span>
        <p>$1.600.000</p>
      </div>
      <div>
        <span>Rendimiento</span>
        <p>-$30000</p>
      </div>
    </div>
  );
};

export default InvestSummary;
