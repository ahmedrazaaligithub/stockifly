import React, { useEffect, useRef } from 'react';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Register the necessary components from chart.js
Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarCharts = ({ data }) => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    // Prepare chart data from props
    const chartData = {
      labels: data.map(item => item.date),
      datasets: [
        {
          label: 'Purchases',
          data: data.map(item => item.purchases),
          backgroundColor: '#20C997',
        },
        {
          label: 'Sales',
          data: data.map(item => item.sales),
          backgroundColor: '#f8c146',
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          beginAtZero: true,
        },
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          position: 'bottom',
        },
      },
    };

    // Create a new chart instance
    const ctx = chartRef.current.getContext('2d');
    chartInstance = new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: options,
    });

    // Cleanup on unmount
    return () => {
      chartInstance.destroy();
    };
  }, [data]);

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <canvas ref={chartRef} />
    </div>
  );
};

export default BarCharts;
