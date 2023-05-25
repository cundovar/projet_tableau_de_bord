import React from "react";
import ChartComponent from "./components/chart";
import Chart2 from "./components/chart2";
import Chart3 from "./components/chart3";
import Chart4 from "./components/chart4";
import Table from "./components/table";
import Users from "./components/users";
const MainTableau = () => {
  return (
    <div>
      <div className="row d-flex flex-wrap ">
        <div className="graphMiddle div_graph chart1_2">
          
          <ChartComponent />
        </div>
        <div className="graphMiddle div_graph chart1_2">
          <Chart2 />
        </div>
      </div>

      <div className="div_graph">
        <Chart3 />
      </div>

      <div>
        <div className="div_graph">
          <Chart4 />
        </div>
      </div>

      <div>
        <div>
           <Table/>
        </div>

        <div>
         <Users/>
        </div>

      </div>

    </div>
  );
};
export default MainTableau;
