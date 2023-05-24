import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement,LinearScale,CategoryScale } from "chart.js";
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend, BarElement,LinearScale,CategoryScale);

const Chart2=()=>{

        const [ donneesProduction, setDonneesProduction]=useState(null)
        
    useEffect(()=>{
        fetch('./../data.json')
        .then((response)=>response.json())
        .then((data)=>{
     
            const productionData = {
                labels: Object.keys(data.donnees_production),
                datasets: [
                  {
                    data: Object.values(data.donnees_production),
                    backgroundColor: ['red', 'green', 'blue','yellow','pink','black','violet'], // Couleurs des secteurs
                  },
                ],
              };
           setDonneesProduction(productionData)
             
             
      
      
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données JSON:', error);
      });
  }, []);


  return(
    <div className="">
        <h3>graphique 2</h3>
        <div>
      {  donneesProduction ? <Doughnut data={donneesProduction}/> : null }

        </div>
    
    </div>
  )
}

export default Chart2