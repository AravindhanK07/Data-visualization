import React from "react";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineGraph = () => {
  const [days, setDays] = useState([]);
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/data");
      const { labels, steps } = response.data;

      setDays(labels);
      setSteps(steps);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const lineChartData = {
    labels: days,
    datasets: [
      {
        label: "Steps",
        data: steps,
        borderColor: "rgb(75, 192, 192)",
        fill: false,
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
        text: "Steps per Day",
      },
    },
  };

  return (
    <div className="linegraph">
      <Line data={lineChartData} options={options} />
    </div>
  );
};

export default LineGraph;
