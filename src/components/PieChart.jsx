import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ chartData }) => {
  const options = {
    responsive: true, // Make the chart responsive
    maintainAspectRatio: false, // Don't maintain aspect ratio when the chart is resized
    plugins: {
      legend: {
        position: 'top', // The position of the chart legend (top, left, bottom, right)
        labels: {
          color: 'black',
        },
      },
    },
  };

  return <Pie data={chartData} options={options} className="h-80" />;
};

export default PieChart;
