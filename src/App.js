import React from "react";
import TitleSections from "./components/userdisplay/TitleSections";
import ValueCard from "./components/balance/ValueCard";
import InvestSummary from "./components/investsummary/InvestSummary";

import Palmera from "./palmera.png";
import laptop from "./laptop.png";

import "./App.css";
import GoalsView from "./components/goalsview/GoalsView";

function App() {
  return (
    <div className="App">
      <TitleSections title="Hola, Camila" icon="far fa-bell" />
      <ValueCard />
      <InvestSummary />
      <TitleSections title="Tus metas" icon="fas fa-plus-circle" />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <GoalsView
          img={Palmera}
          title="Viaje a Islas Canarias"
          amount="1.630.000"
          goal="8.000.000"
          radius="20"
          progress="20"
        />
        <GoalsView
          img={laptop}
          title="Macbook Pro"
          amount="0"
          goal="8.000.000"
          radius="20"
          progress="5"
          style={{ marginRight: "10px" }}
        />
      </div>
    </div>
  );
}

export default App;
