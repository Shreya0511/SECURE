import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment'; // Ensure moment.js is installed
import ApexChart from "apexcharts";
import Chart from "react-apexcharts";
import NavBarProfile from './NavBarProfile';
import { useNavigate } from 'react-router-dom';
import Threshold from './Threshold';


const API_URL = 'https://api.thingspeak.com/channels/2349053/feeds.json';
const API_KEY = '0H5Z4Y2DMQCL7ULK'; // Replace with your API key
const RESULTS = 2; // Number of data points to fetch

const ReadData = () => {
  const navigate = useNavigate();
  
  const [pauseData, setPauseData] = useState(false);
  const [dataStream, setDataStream] = useState([]); 
  const [threshold, setThreshold] = useState(0);
  const [showWarning, setShowWarning] = useState(false);
  const [warningTimestamp, setWarningTimestamp] = useState('');
  const series = [
    {
      name: "Voltage",
      data: [], // Initially empty data
    },
  ];

  const options = {
    chart: {
      id: 'realtime',
      type: 'line',
      zoom: {
        enabled: true,
        type: 'x',
        autoScaleYaxis: true,
      },
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
    xaxis: {
      type: 'datetime',
      tickAmount: 'dataPoints', // Show ticks for all data points
      labels: {
        show:false,
        formatter: function (val) {
          return moment(val).format('HH:mm:ss'); // Format x-axis labels as HH:MM:SS
        },
      },
      
    },
    yaxis: {
      min: -6,
      max: 6,
    },
    tooltip: {
      x: {
        formatter: function (val) {
          return moment(val).format('HH:mm:ss'); // Format tooltip x-axis as HH:MM:SS
        },
      },
    },
  };

  const appendData = async (dataPoint) => {
    const currentTimestamp = moment();
    const newX = currentTimestamp.valueOf(); // Convert timestamp to milliseconds for x-axis
    const randomY = Math.random() * 3 - 1.5;
    const roundedY = parseFloat(randomY.toFixed(2));
    const valY = roundedY + parseFloat(dataPoint);
    const newY=parseFloat(valY.toFixed(2));

    if (newY > threshold) {
      const timestampString = moment(currentTimestamp).format('HH:mm:ss');
      setWarningTimestamp(timestampString);
      setShowWarning(true);
    } 
    // else {
    //   setShowWarning(false);
    // }
    console.log(showWarning,threshold,newY);

    setDataStream([...dataStream, { x: newX, y: newY }]);
    ApexChart.exec('realtime', 'updateSeries', [{ data: dataStream }]);
  };

  
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}?api_key=${API_KEY}&results=${RESULTS}`);
        const fetchedData = response.data.feeds[0];
        const y = fetchedData.field1;
        console.log(y);

        appendData(y); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (!pauseData) {
      setTimeout(fetchData, 1000);
    }

    return () => clearTimeout(); // Clear any remaining timeout on component unmount
  }, [dataStream, pauseData]);

  const handleBack = () => {
    navigate('/dashboard'); 
  };
  const handlePauseResume = () => {
    setPauseData(!pauseData);
  };
  const handleThresholdChange = (newThreshold) => {
    setThreshold(newThreshold);
  };

  const handleCloseWarning = () => {
    setShowWarning(false);
  };

  // return (
  // <>
  //  <NavBarProfile />
  //   <div>
  //     <Chart series={series} options={options} height={400} style ={{padding : "1.5rem"}}  />
  //     <Threshold threshold={threshold} onThresholdChange={handleThresholdChange} />
  //     {showWarning && (
  //         <div className="warning-popup" style={{ position: 'absolute', top: '20px', right: '20px', padding: '10px', background: 'rgba(255, 0, 0, 0.7)', color: 'white', borderRadius: '5px', zIndex: '9999' }}>
  //           <p>{`Warning! Threshold crossed at Time: ${warningTimestamp}`}</p>
  //           <button onClick={handleCloseWarning} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
  //             &#10006;
  //           </button>
  //         </div>
  //       )}
  //     <button style ={{display : "flex", alignItems: "center", justifyContent: "center", marginLeft : "2rem", marginBottom : "2rem"}}onClick={handlePauseResume}>Pause/Resume</button>
  //     <button style ={{display : "flex", alignItems: "center", justifyContent: "center", marginLeft : "2rem", marginBottom : "2rem"}}onClick={handleBack}>Back</button>

  //   </div>

  //   </>


  // );

  return (
    <>
      <NavBarProfile />
      <div style={{ position: 'relative' }}>
        <Chart series={series} options={options} height={400} style={{ padding: '1.5rem' }} />
        <Threshold threshold={threshold} onThresholdChange={handleThresholdChange} />
        {showWarning && (
          <div className="warning-popup" style={{ position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)', padding: '10px', background: 'rgba(255, 0, 0, 0.7)', color: 'white', borderRadius: '5px', zIndex: '9999' }}>
            <p>{`Warning! Threshold crossed at Time: ${warningTimestamp}`}</p>
            <button onClick={handleCloseWarning} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
              &#10006;
            </button>
          </div>
        )}
        <button
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '2rem', marginBottom: '2rem' }}
          onClick={handlePauseResume}
        >
          Pause/Resume
        </button>
        <button
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '2rem', marginBottom: '2rem' }}
          onClick={handleBack}
        >
          Back
        </button>
      </div>
    </>
  );
};

export default ReadData;
