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
            console.log(data.donnees_production.performances_processus)
            const productionData = {
                labels: Object.keys(data.donnees_production.performances_processus),
                datasets: [
                  {
                    data: Object.values(data.donnees_production.performances_processus),
                    backgroundColor: ['red', 'green', 'blue'], // Couleurs des secteurs
                  },
                ],
              };
           setDonneesProduction(productionData)
             
             
      
      
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données JSON:', error);
      });
  }, [donneesProduction]);


  return(
    <div>
        <h3>graphique 2</h3>
      {  donneesProduction ? <Doughnut data={donneesProduction}/> : null }
    
    </div>
  )
}

export default Chart2