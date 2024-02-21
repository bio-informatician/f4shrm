import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const VennDiagram = ({ chartData }) => {
  // Format the data for the Venn diagram
  const formatVennData = (data) => {
    const labels = data.map((item) => item.name);
    const values = data.map((item) => item.count);

    return {
      labels: labels,
      datasets: [
        {
          data: values,
          backgroundColor: [
            '#00429d', '#ef6548', '#5fc463', '#ffd700', '#8c564b',
            '#4b0082', '#ff69b4', '#2ca02c', '#ff7f0e', '#1f77b4',
          ],
        },
      ],
    };
  };

  // Format the data using the provided function
  const formattedData = formatVennData(chartData);

  // Set legend text color to black using plugins
  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: 'black',
        },
      },
    },
  };

  return (
    <div style={{ maxWidth: '300px', margin: '0 auto' }}>
      <Doughnut data={formattedData} options={options} />
    </div>
  );
};

export default VennDiagram;
