import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from 'recharts';

const GeneralSummaryBarChart = ({ title = "General Summary", width = 450, height = 300 }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.10.12:7000/api/statsSummaryChart/')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const COLORS = [
    '#00429d', '#ef6548', '#5fc463', '#ffd700', '#8c564b',
    '#4b0082', '#ff69b4', '#2ca02c', '#ff7f0e', '#1f77b4'];

    return (
      <div style={{ overflow: 'hidden', padding: '10px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '24px', color: 'black', fontWeight: 'bold' }}>{title}</h2>
        <BarChart
          width={width}
          height={height}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 10,
            bottom: 0,
          }}
          layout="horizontal" // Set layout to horizontal for rotating the chart
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="name" 
            type="category" 
            tick={{ fontSize: 12, fill: 'black' }} 
            stroke="black"
            label={{ value: 'Name', position: 'insideBottom', offset: 1, fill: 'black' }}
          />
          <YAxis 
            type="number" 
            tick={{ fill: 'black' }} 
            stroke="black"
            label={{ value: 'Count', angle: -90, position: 'insideLeft', fill: 'black' }}
          />
          <Tooltip />
          <Bar dataKey="count">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </div>
    );
  };
  
  export default GeneralSummaryBarChart;
