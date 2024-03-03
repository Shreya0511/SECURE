import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment'; // Ensure moment.js is installed
import ApexChart from "apexcharts";
import Chart from "react-apexcharts";

const API_URL = 'https://api.thingspeak.com/channels/2349053/feeds.json';
const API_KEY = '0H5Z4Y2DMQCL7ULK'; // Replace with your API key
const RESULTS = 2; // Number of data points to fetch

const ReadData = () => {
  // Use the spread operator to initialize dataStream with an object
  const [pauseData,setPauseData]=useState(false);
  const [dataStream, setDataStream] = useState([{
    x: 0,
    y: 0,
  }]);

  const series = [
    {
      name: "Voltage",
      data: dataStream.map((point) => ({ x: point.x, y: point.y }))
    },
  ];

  const options = {
    chart: {
      id: 'realtime',
      type: 'line',
      animations: {
        enabled: true,
        easing: 'linear',
        
      },
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 0,
        tools: {
          download: true,
          selection: false,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: false,
          reset: true | '<img src="/static/icons/reset.png" width="20">',
          customIcons: []
        },
        // autoSelected: 'zoom' 
      },
      zoom: {
        enabled: true,
        type: 'x',  
        autoScaleYaxis: false,  
        zoomedArea: {
          fill: {
            color: '#90CAF9',
            opacity: 0.4
          },
          stroke: {
            color: '#0D47A1',
            opacity: 0.4,
            width: 1
          }
        }
      }
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: 'smooth',
    },
    title: {
      text: "Voltage vs time",
      align: 'left',
    },
    markers: {
      size: 5,
    },
    xaxis: {
      range:7,
      type: 'numeric',
      tickAmount: 'dataPoints', 
      tickPlacement: 'on',
      labels:{
        show:false
      }
      
    },
    yaxis: {
      min: -6,
      max: 6,
    },
  };

  const appendData = async (dataPoint) => {
    const prev = dataStream[dataStream.length - 1];
    const newX = prev['x']+5;

    const randomY = Math.random() * 3 - 1.5;
    const roundedY=randomY.toFixed(2);
    const newY=roundedY+dataPoint;
    console.log(newY);
    // console.log(dataPoint);
    setDataStream([...dataStream, { x: newX, y: newY}]);

   
    ApexChart.exec('realtime', 'updateSeries', [{ data: dataStream }]);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}?api_key=${API_KEY}&results=${RESULTS}`);
        const fetchedData = response.data.feeds[0];
        const y = fetchedData.field1;

        appendData(y).then(console.log(y)); 
        console.log(dataStream);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    console.log(pauseData);

    if(!pauseData)
    {
      setTimeout(fetchData, 10000);

    }
    // const intervalId = setInterval(fetchData, 5000); // Fetch data every 5 seconds

    // return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [dataStream,pauseData]);
  const handlePauseResume = () => {
    setPauseData(!pauseData); 
  };
  return (
    <div>
      <Chart series={series} options={options} height={500} />
      <button onClick={handlePauseResume}>Pause/Resume</button>
    </div>
  );
};

export default ReadData;
