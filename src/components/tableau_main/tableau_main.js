import React from "react";
import ChartComponent from "./components/chart";
import Chart2 from "./components/chart2";
import Chart3 from "./components/chart3";
import Chart4 from "./components/chart4";
import Table from "./components/table";
import Users from "./components/users";
import Chart5 from "./components/chart5";
import DivDebut from "./components/divDebut";
const MainTableau = () => {
 



  return (
    <div>


   
      <div>
       <DivDebut/>
      </div>
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
       
        </div>
      </div>

      <div className="row tableUser">
        <div className=" div_graph ">
          <Table />
        </div>

        <div className="div_graph users ">
          <Users />
        </div>
      </div>
     
    </div>
  );
};
export default MainTableau;
