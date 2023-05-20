import React from "react";
import LeftNav from "../components/left_nav/LeftNav";
import MainTableau from "../components/tableau_main/tableau_main";
const Home=()=>{
    return(
    <div className="total">
        <div className="left_nav"><LeftNav/> </div>
        <div className="tableau_main"><MainTableau/> </div>
    </div>
    )
}

export default Home