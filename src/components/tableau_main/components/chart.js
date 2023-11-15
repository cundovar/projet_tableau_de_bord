import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement,LinearScale,CategoryScale } from "chart.js";
import 'charts.css';
import { Bar } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend, BarElement,LinearScale,CategoryScale);

const ChartComponent = () => {
   
  // Données du graphique
  const data = {
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai'],
    datasets: [
      {
        label: 'Ventes mensuelles', 
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgb(164, 164, 234)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label:  'retour mensuel',
        data:  [1,2,3,4],
       
        backgroundColor: 'rgb(241, 148, 148',
        
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Options du graphique
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className='' >
      <h3>graphique</h3>
      <Bar data={data} options={options} height={100}  />
    </div>
  );
};

export default ChartComponent;
