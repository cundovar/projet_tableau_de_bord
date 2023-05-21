import React from "react";
import ChartComponent from "./components/chart";
import Chart2 from "./components/chart2";

const MainTableau=()=>{
    return(
        <div>
            <div>
                <h3>graphique</h3>
                <ChartComponent/>
            </div>
            <div>
                <Chart2/>
            </div>
        </div>
    )
}
export default MainTableau