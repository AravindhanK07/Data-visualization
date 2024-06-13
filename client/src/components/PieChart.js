import React from "react";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useEffect, useState } from "react";
import axios from "axios";

ChartJS.register(Tooltip, Legend, ArcElement);

const PieChart = () => {
  const [platforms, setPlatforms] = useState([]);
  const [time, setTime] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/time");
      const { labels, time } = response.data;

      setPlatforms(labels);
      setTime(time);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const pieChartData = {
    labels: platforms,
    datasets: [
      {
        label: "Time Spent",
        data: time,
        backgroundColor: [
          "rgba(255,99,132,0.9)",
          "rgba(54,162,235,0.9)",
          "rgba(255,206,86,0.9)",
          "rgba(75,192,192,0.9)",
          "rgba(153,102,255,0.9)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Mobile usage",
      },
    },
  };

  return (
    <div className="piechart">
      <Pie options={options} data={pieChartData} />
    </div>
  );
};

export default PieChart;
