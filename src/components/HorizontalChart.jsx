import React from 'react';
import { HorizontalBar } from '/node_modules/react-chartjs-2';


const HorizontalChart = ({ data }) => {
  const options = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  return <HorizontalBar data={data} options={options} />;
};

export default HorizontalChart;
