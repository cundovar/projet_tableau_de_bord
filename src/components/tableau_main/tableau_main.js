import React from "react";
import ChartComponent from "./components/chart";
import Chart2 from "./components/chart2";
import Chart3 from "./components/chart3";
const MainTableau = () => {
  return (
    <div>
    <div className="flex">
      <div >
        <h3>graphique</h3>
        <ChartComponent />
      </div>
      <div className="col-6" >
        <Chart2 />
      </div>
    </div>

    <div>
        <Chart3/>
    </div>

    </div>
  );
};
export default MainTableau;
