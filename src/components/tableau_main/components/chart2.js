import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement,LinearScale,CategoryScale } from "chart.js";
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, BarElement,LinearScale,CategoryScale);

const Chart2=()=>{

        const [ donneesProduction, setDonneesProduction]=useState()
        
    useEffect(()=>{
        fetch('/data.json')
        .then((response)=>response.json())
        .then((data)=>{
            const productionData = {
                labels: Object.keys(data.donnees_production.performances_processus),
                datasets: [
                  {
                    data: Object.values(data.donnees_production.performances_processus),
                    backgroundColor: ['red', 'green', 'blue'], // Couleurs des secteurs
                  },
                ],
              };
              setDonneesProduction(productionData);
      
        console.log(donneesProduction);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données JSON:', error);
      });
  }, []);

  return(
    <div>
        <h3>graphique 2</h3>
        <Doughnut data={donneesProduction}></Doughnut>
    </div>
  )
}

export default Chart2