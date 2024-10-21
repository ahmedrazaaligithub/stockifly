import React, { useEffect, useRef } from 'react';
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the necessary components from chart.js
Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

const DoughnutChart = ({ data,height }) => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    // Prepare chart data from props
    const chartData = {
      labels: data.map(product => product.name),
      datasets: [
        {
          data: data.map(product => product.value),
          backgroundColor: data.map(product => product.color),
          hoverBackgroundColor: data.map(product => product.color), // Optional: Add hover effects
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
        },
      },
    };

    // Create a new chart instance
    const ctx = chartRef.current.getContext('2d');
    chartInstance = new Chart(ctx, {
      type: 'doughnut',
      data: chartData,
      options: options,
    });

    // Cleanup on unmount
    return () => {
      chartInstance.destroy();
    };
  }, [data]);

  return (
    <div style={{ width: '100%', height: height }}>
      <canvas ref={chartRef} />
    </div>
  );
};

export default DoughnutChart;
