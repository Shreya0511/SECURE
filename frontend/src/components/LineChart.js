import React from 'react'
import {Line} from "react-chartjs-2"
import "../styles/LineChart.css"
const LineChart = ({chartData}) => {
    const options = {
  // ... other options
  scales: {
    x: {
      // Enable horizontal scrolling, adjust as needed
      min: chartData.labels[0],
      max: chartData.labels[chartData.labels.length - 1],
      ticks: {
        // Control the number of visible labels
        maxTicksLimit: 10,
      },
      autoSkip: false,
      
    },
    // maintainAspectRatio:false,
  },
};

  return (
    <div className="chart-container">
    <div className="chart-wrapper" >
      <Line data={chartData} options={options}/>
    </div>
  </div>
  )
}

export default LineChart