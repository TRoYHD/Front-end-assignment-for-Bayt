import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const ColumnChart = ({ onRendered }) => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  useEffect(() => {
    // Simulate render completion
    if (onRendered) {
      onRendered();
    }
  }, [onRendered]);

  return <Bar data={data} />;
};

export default ColumnChart;
