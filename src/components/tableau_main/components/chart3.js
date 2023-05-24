import React, { useEffect, useState } from "react";
import { Chart as ChartJS,
        ArcElement,
        Tooltip,
        Legend,
        LinearScale,
        CategoryScale,
        PointElement,
        LineElement
        } from "chart.js";

import 'charts.css';


import { Line } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend,LinearScale,CategoryScale, PointElement,LineElement);
const Chart3=()=>{

const [donneesSite,setDonneesSite]=useState(null)

useEffect(()=>{
    fetch('./../data.json')
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data.visites_site)
       
        setDonneesSite(data.visites_site)
    })
    .catch((error) => {
        console.error('Erreur lors de la récupération des données JSON:', error);
      });
},[])



    return(
        <div>
           <h3>graphique 3</h3>
           { donneesSite && (
            <>
            <h6>{donneesSite.title} </h6>
 
            
            <Line
            data={donneesSite.data}
            options
            className="chart charts-css line"
          />
           
            
            </>
           )}
           </div>
    )
}

export default Chart3