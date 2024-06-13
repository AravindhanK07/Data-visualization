import React from "react";
import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [div, setDiv] = useState([]);
  const [expense, setExpense] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/expenses");
      const { labels, expenses } = response.data;

      setDiv(labels);
      setExpense(expenses);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const barChartData = {
    labels: div,
    datasets: [
      {
        label: "Expenses",
        data: expense,
        backgroundColor: ["rgba(255,99,132,0.2)"],
        borderColor: ["rgba(54,162,235,1)"],
        borderWidth: 1,
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
        text: "Monthly expense",
      },
    },
  };
  return (
    <div className="bargraph">
      <Bar options={options} data={barChartData} />
    </div>
  );
};

export default BarChart;
