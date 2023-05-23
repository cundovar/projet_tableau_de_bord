import React from "react";
import ChartComponent from "./components/chart";
import Chart2 from "./components/chart2";
import Chart3 from "./components/chart3";
import Chart4 from "./components/chart4";
const MainTableau = () => {
  return (
    <div>
      <div className="row">
        <div className="graphMiddle">
          <h3>graphique</h3>
          <ChartComponent />
        </div>
        <div className="graphMiddle">
          <Chart2 />
        </div>
      </div>

      <div>
        <Chart3 />
      </div>

      <div>
        <div>
          <Chart4 />
        </div>
      </div>
    </div>
  );
};
export default MainTableau;
