import React from "react";


const DivDebut = () => {

  return (
    <div className="test">
      <div className="div_graph">
        <div className="d-flex justify-content-between contentDebut">
          <div className="div">
            <div className="colorText text-center">
                <h3>1005</h3>
            </div>
            <div className="colorNumber text-center" >
                <h5>vues</h5>
            </div>
          </div>

          <div className="colorIcon d-flex justify-content-center align-items-center">

          
          <i class="fa-regular fa-eye iconDebut"></i>
          </div>
        </div>
      </div>



      <div className="div_graph">
        <div className="d-flex justify-content-between contentDebut">
          <div>
            <div className="colorText text-center">
                <h3>35</h3>
            </div>
            <div className="colorNumber text-center" >
                <h5>ventes</h5>
            </div>
          </div>

          <div className="colorIcon d-flex justify-content-center align-items-center">

          
          <i class="fa-regular fa-dollar-sign"></i>
          </div>
        </div>
      </div>


      <div className="div_graph">
        <div className="d-flex justify-content-between contentDebut">
          <div>
            <div className="colorText text-center">
                <h3>3008</h3>
            </div>
            <div className="colorNumber text-center" >
                <h5>commentaires</h5>
            </div>
          </div>

          <div className="colorIcon d-flex justify-content-center align-items-center">

          
          <i class="fa-regular fa-comment"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivDebut;
