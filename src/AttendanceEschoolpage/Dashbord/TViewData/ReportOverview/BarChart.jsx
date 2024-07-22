import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import "../ReportOverview/style.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        label: "Data",
        data: data.map((item) => item.value),
        backgroundColor: "rgba(0, 255, 0, 0.7)", // Green color for bars
      },
    ],
  };

  const chartOptions = {
    // Add options for chart customization (e.g., scales, legend, etc.)
    responsive: true,
    scales: {
      x: {
        type: "category",
        ticks: {
          autoSkip: false,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div className="bar-chart-container">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChart;
