import Gantt from "react-gantt-chart";
import React, { useState, useEffect } from "react";
import axios from "axios";
import HorizontalGanttChart from "react-horizontal-gantt-chart";

const HorizontalGanttChartTest = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://192.168.10.12:7000/api/statsSummary/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <HorizontalGanttChart
        data={data}
        width={200}
        height={200}
      />
    </div>
  );
};

export default HorizontalGanttChartTest;
