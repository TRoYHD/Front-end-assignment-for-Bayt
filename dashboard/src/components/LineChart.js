import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ onRendered }) => {
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

  return <Line data={data} />;
};

export default LineChart;
