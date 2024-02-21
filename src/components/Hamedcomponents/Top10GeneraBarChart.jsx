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
  Label, // Import Label from Recharts
} from 'recharts';
import { useNavigate } from 'react-router-dom';

const Top10GeneraBarChart = ({
  title = 'Top 10 Genera',
  width = 450,
  height = 300,
  yAxisWidth = 100, // Set a custom width for YAxis

}) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://192.168.10.12:7000/api/statsTop10GeneraList/')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const COLORS = [
    '#00429d',
    '#ef6548',
    '#5fc463',
    '#ffd700',
    '#8c564b',
    '#4b0082',
    '#CC79A7',
    '#009E73',
    '#ff7f0e',
    '#1f77b4',
  ];

  const handleClickOnBar = (item, entry) => {
    let { name } = entry || '';

    console.log('entryentryentryentry', name);

    if (name) {
      navigate(`/Results/Genera10/${name}[Genus]`, {
        state: { from: 'Genera10', value: name },
      });
    }
    // console.log('item , entryitem , entry , ', item, entry);
  };

  return (
    <div style={{ overflow: 'hidden', padding: '10px' }}>
      <h2
        style={{
          textAlign: 'center',
          fontSize: '24px',
          color: 'black',
          fontWeight: 'bold',
        }}
      >
        {title}
      </h2>
      <BarChart
        width={width}
        height={height}
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: yAxisWidth, // Adjust the left margin to accommodate the YAxis width
          bottom: 0,
        }}
        layout="vertical"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" tick={{ fill: 'black' }} stroke="black">
  {/* X Axis Title */}
  <Label value="Count" position="insideBottom" offset={0} fill="black" />
</XAxis>
        <YAxis
          dataKey="name"
          type="category"
          width={yAxisWidth}
          tick={{ fontSize: 12, fill: 'black' }}
          stroke="black"
          
        >
          {/* Y Axis Title */}
          <Label
            // value="Genera"
            angle={-90}
            position="insideLeft"
            style={{ textAnchor: 'middle', fill: 'black' }}
          />
        </YAxis>
        <Tooltip contentStyle={{ color: 'black' }} />
        <Bar dataKey="count">
          {data.map((entry, index) => (
            <Cell
              onClick={(item) => handleClickOnBar(item, entry)}
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default Top10GeneraBarChart;

