import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment'; // Ensure moment.js is installed
import ApexChart from 'apexcharts';
import Chart from 'react-apexcharts';
import NavBarProfile from './NavBarProfile';
import { useNavigate } from 'react-router-dom';
import Threshold from './Threshold';

const API_URL = 'https://api.thingspeak.com/channels/2349053/feeds.json';
const API_KEY = '0H5Z4Y2DMQCL7ULK'; // Replace with your API key
const RESULTS = 2; // Number of data points to fetch

const ReadData = () => {
  const navigate = useNavigate();

  const [pauseData, setPauseData] = useState(false);
  const [dataStream, setDataStream] = useState([
    {
      x: moment().valueOf(),
      y: 0,
      originalY: 0,
    },
  ]);
  const [threshold, setThreshold] = useState(0);
  const [showWarning, setShowWarning] = useState(false);
  const [warningTimestamp, setWarningTimestamp] = useState('');
  const [lastDate, setLastDate] = useState('');
  const series = [
    {
      name: 'Energy',
      data: dataStream,
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
      enabled: false,
    },
    markers: {
      size: 6, // Set the size of the marker circle
      strokeWidth: 0, // Set the width of the marker circle border
      hover: {
        size: 8, // Set the size of the marker circle on hover
      },
    },
    stroke: {
      curve: 'smooth',
    },
    title: {
      text: 'Energy vs time',
      align: 'left',
    },
    xaxis: {
      type: 'datetime',
      tickAmount: 'dataPoints',
      labels: {
        show: false,
        formatter: function (val) {
          return moment(val).format('HH:mm:ss');
        },
      },
    },
    yaxis: {
      min: 0,
      max: 10,
      // labels: {
      //   formatter: function (val) {
      //     const originalY = Math.pow(10, val) - 1;
      //     return originalY.toFixed(2);
      //   },
      // },
    },
    tooltip: {
      x: {
        formatter: function (val) {
          return moment(val).format('HH:mm:ss');
        },
      },
      y:{
        formatter: function (val) {
        const originalY = Math.pow(10, val);
        return `Value: ${originalY.toFixed(2)}`;
      },
      }
    },
  };

  const appendData = async (dataPoint) => {
    const currentTimestamp = moment();
    const newX = currentTimestamp.valueOf();

    const cumulativeEnergy = dataStream.length > 0 ? dataStream[dataStream.length - 1].originalY : 0;

    const newY = parseFloat((cumulativeEnergy + parseFloat(dataPoint)).toFixed(2));
    const logScaledY = Math.log10(newY + 1).toFixed(2);

    if (newY > threshold) {
      const timestampString = moment(currentTimestamp).format('HH:mm:ss');
      setWarningTimestamp(timestampString);
      setShowWarning(true);
    }
    setDataStream([...dataStream, { x: newX, y: logScaledY, originalY: newY }]);
    // console.log(dataStream,newY);

    ApexChart.exec('realtime', 'updateSeries', [{ data: dataStream }]);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}?api_key=${API_KEY}&results=${RESULTS}`);
        const fetchedData = response.data.feeds[0];
        // console.log(fetchedData);
        const y = fetchedData.field1;
        const currentDate = fetchedData.created_at;
        

        
      // Check if the current date is different from the lastDate
        if (currentDate !== lastDate) {
          console.log(lastDate);
          console.log(currentDate);
          const y = fetchedData.field1;
          console.log(y);
          appendData(y);
          
          // Update lastDate
          setLastDate(currentDate);
        }
        //Uncomment this for simulation
        // appendData(y);


        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (!pauseData) {
      setTimeout(fetchData, 1000);
    }

    return () => clearTimeout();
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

  return (
    <>
      <NavBarProfile />
      <div style={{ position: 'relative' }}>
        <Chart series={series} options={options} height={400} style={{ padding: '1.5rem' }} />
        <Threshold threshold={threshold} onThresholdChange={handleThresholdChange} />
        {showWarning && (
          <div
            className="warning-popup"
            style={{
              position: 'absolute',
              top: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              padding: '10px',
              background: 'rgba(255, 0, 0, 0.7)',
              color: 'white',
              borderRadius: '5px',
              zIndex: '9999',
            }}
          >
            <p>{`Warning! Threshold crossed at Time: ${warningTimestamp}`}</p>
            <button
              onClick={handleCloseWarning}
              style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
            >
              &#10006;
            </button>
          </div>
        )}
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: '2rem',
            marginBottom: '2rem',
          }}
          onClick={handlePauseResume}
        >
          Pause/Resume
        </button>
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: '2rem',
            marginBottom: '2rem',
          }}
          onClick={handleBack}
        >
          Back
        </button>
      </div>
    </>
  );
};

export default ReadData;
