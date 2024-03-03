// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import '../styles/LineChart.css';

// const LineChart = ({ chartData }) => {
//   const { labels, datasets } = chartData;

//   const data = {
//     labels: labels,
//     datasets: datasets,
//   };

//   const options = {
//     maintainAspectRatio: false,
//     scales: {
//       x: {
//         // Enable horizontal scrolling, adjust as needed
//         // min: chartData.labels[0],
//         // max: chartData.labels[chartData.labels.length - 1],
//         ticks: {
//           // Control the number of visible labels
//           maxTicksLimit: 5,
//         },
//         autoSkip: false,
//         stacked: false,
//       },
//     },
//   };

//   return (
//     <div className="chart-container">
//       <div className="chart-wrapper">
//         <div style={{ width: '100%', overflowX: 'scroll' }}>
//           <Line data={data} options={options} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LineChart;

import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import '../styles/LineChart.css';

const LineChart = ({ chartData }) => {
  const { labels: initialLabels, datasets } = chartData;
  const initialLabelCount = 7; // Number of initial labels to display
  const [displayedData, setDisplayedData] = useState({
    labels: initialLabels.slice(0, initialLabelCount), // Display only the first 7 labels initially
    datasets: datasets.map((dataset) => ({
      ...dataset,
      data: dataset.data.slice(0, initialLabelCount), // Display only the first 7 data points initially
    })),
  });

  useEffect(() => {
    const updateChartData = () => {
      setDisplayedData((prevData) => {
        const newLabels = prevData.labels.concat(chartData.labels.slice(prevData.labels.length));
        const newDatasets = prevData.datasets.map((dataset, index) => ({
          ...dataset,
          data: [...dataset.data, ...datasets[index].data.slice(prevData.labels.length)],
        }));

        return {
          labels: newLabels,
          datasets: newDatasets,
        };
      });
    };

    updateChartData();
  }, [chartData, datasets]);

  return (
    <div className="chart-container" style={{ width: '100%', overflowX: 'auto' }}>
      <div className="chart-wrapper" style={{ minWidth: '800px' }}>
        <Line data={displayedData} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  );
};

export default LineChart;
