import React, { useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';

const DonutChart = ({ onRendered }) => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  useEffect(() => {
    // Simulate render completion
    if (onRendered) {
      onRendered();
    }
  }, [onRendered]);

  return <Doughnut data={data} />;
};

export default DonutChart;
