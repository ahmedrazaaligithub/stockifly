import { Line } from "react-chartjs-2";
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

// Register necessary components for ChartJS
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.date),
    datasets: [
      {
        label: "Payment Sent",
        data: data.map((item) => item.paymentSent),
        borderColor: "#20C997", // Line color
        backgroundColor: "#20C997",
        fill: false,
        tension: 0.1, // Smooth curve
        pointRadius: 5,
        pointHoverRadius: 7,
      },
      {
        label: "Payment Received",
        data: data.map((item) => item.paymentReceived),
        borderColor: "#f8c146",
        backgroundColor: "#f8c146",
        fill: false,
        tension: 0.1,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Amount (in USD)",
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default LineChart;
