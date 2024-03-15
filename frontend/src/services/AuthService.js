import { createContext, useContext, useEffect, useState } from "react";
import RenderRoutes from "../routes/RenderRoutes";
import axios from 'axios';
import moment from 'moment';
import ApexChart from 'apexcharts';
import Chart from 'react-apexcharts';


const API_URL = 'https://api.thingspeak.com/channels/2349053/feeds.json';
const API_KEY = '0H5Z4Y2DMQCL7ULK'; // Replace with your API key
let RESULTS = 100; // Number of data points to fetch


const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {

  const [user, setUser] = useState({user : "",isAuthenticated: false});
  const [pauseData, setPauseData] = useState(false);
  const [dataStream, setDataStream] = useState([]);
  const [threshold, setThreshold] = useState(0);
  const [showWarning, setShowWarning] = useState(false);
  const [notifications, setNotifications] = useState("");
  const [notifyDetails, setNotifyDetails]= useState([]);
  const [results, setResults] = useState(100);


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
      size: 6,
      strokeWidth: 0,
      hover: {
        size: 8,
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
      // range:15,
      // tickPlacement:'on',
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
    },
    tooltip: {
      x: {
        formatter: function (val) {
          return moment(val).format('HH:mm:ss');
        },
      },
      y: {
        formatter: function (val) {
          return `Value: ${val.toFixed(2)}`;
        },
      },
    },
  };

  const appendData = async (segment) => {
    const cumulativeEnergy = segment.reduce((sum, dataPoint) => sum + parseFloat(dataPoint.field1), 0);
    const averageCumulativeEnergy = cumulativeEnergy / 10 + (Math.random() * 2) + 1;
  
    console.log(segment);
    console.log(averageCumulativeEnergy);
    setDataStream(prevData => {
      const newData = [
        ...prevData,
        {
          x: prevData.length === 0
            ? moment().valueOf()-100*1000 // Set initial x value as the current moment for the first point
            : prevData[prevData.length - 1].x + 10 * 1000, // Set x as prevX + 10 seconds for subsequent points
          y: averageCumulativeEnergy.toFixed(2),
          originalY: cumulativeEnergy,
        },
      ];
      if (newData.length > 20) {
        newData.shift(); // Remove the 0th element
      }
  
      return newData;
    });



    
  
    ApexChart.exec('realtime', 'updateSeries', [{ data: dataStream }]);
  };

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}?api_key=${API_KEY}&results=${results}`);
        const fetchedData = response.data.feeds;
        console.log(fetchedData);
        // Calculate cumulative energy for each segment
        for (let i = 0; i <= fetchedData.length - 10; i += 10) {
          const segment = fetchedData.slice(i, i + 10);
          appendData(segment);
      }
        setResults(10);
      } catch (error) {
        console.error('Error fetching initial data:', error);
      }
    };
  
    const intervalId = setInterval(() => {
      if (!pauseData) {
        // Fetch the latest 10 points every 10 seconds
        fetchData();
      }
    }, 10000); // Fetch data every 10 seconds
  
    // Fetch initial 100 data points on component mount
    fetchData();
  
    return () => {
      clearInterval(intervalId);
    };
  }, [pauseData]);

  const handleCloseWarning = () => {
    setShowWarning(false);
  };

  useEffect(() => {

    if (dataStream) {
      const updatedNotificationDetails = [];
      dataStream.forEach(item => {
        setShowWarning(false);
        if (item.y > threshold) {
          console.log("useEffect", threshold, " ",item);
          updatedNotificationDetails.push(item);
          setShowWarning(true);
        }
      });
      setNotifyDetails(updatedNotificationDetails);
    }
  }, [dataStream, threshold]);

    return (
      <AuthContext.Provider
        value={{
          user,
          setUser,
          notifications,
          notifyDetails,
          setNotifyDetails,
          threshold,
          setThreshold,
          showWarning,
          setShowWarning
        }}
      >
          <div className="right-container">
            <RenderRoutes />
          </div>
      </AuthContext.Provider>
    );
  }