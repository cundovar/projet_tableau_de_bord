import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement,LinearScale,CategoryScale } from "chart.js";
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
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
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
    <div className='col-6' >
      <Bar data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
