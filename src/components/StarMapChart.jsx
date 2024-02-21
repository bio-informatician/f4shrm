import { useEffect, useState } from 'react';
import { Scatter } from 'react-chartjs-2';

const StarMapChart = ({ data }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const labels = data.map((item) => item.name);
    const values = data.map((item) => item.count);

    setChartData({
      labels: labels,
      datasets: [
        {
          label: '# of Entities',
          data: values,
          backgroundColor: 'rgba(136, 132, 216, 1)',
          borderColor: 'rgba(136, 132, 216, 1)',
          borderWidth: 1,
        },
      ],
    });
  }, [data]);

  return (
    <div>
      {chartData && (
        <Scatter
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                type: 'category',
                title: {
                  display: true,
                  text: 'Value',
                },
              },
              y: {
                type: 'linear',
                title: {
                  display: true,
                  text: 'Count',
                },
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default StarMapChart;

