import React from "react";
import LeftNav from "../components/left_nav/LeftNav";
import MainTableau from "../components/tableau_main/tableau_main";

const Home=()=>{
    const toggleMenu = () => {
        const menu = document.querySelector(" #menuContent");
        const barre = document.getElementById("burger1");
        menu.classList.toggle("showMenu");
        barre.classList.toggle("opene");
    
    
      };

    return(
        <div>
            <h2 className="text-center">tableau de bord</h2>

            <div className="total">
            <div className="headerNav">
        <a id="link" href="#">
          <span id="burger1" onClick={toggleMenu}></span>
        </a>
      </div>

        <div className="left_nav" id="menuContent" >
            <LeftNav/> </div>
      
        <div className="tableau_main">


            <MainTableau/> </div>

        </div>
  
    

    </div>
    )
}

export default Home