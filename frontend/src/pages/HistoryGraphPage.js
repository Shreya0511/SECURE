import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import ApexChart from "apexcharts";
import Chart from "react-apexcharts";
import NavBarProfile from "../components/NavBarProfile";
import Threshold from "../components/Threshold";
import { useNavigate } from "react-router-dom";
import { AuthData } from "../services/AuthService";
import { useParams } from "react-router-dom";
import Popup from "../components/Popup";
const HistoryGraphPage = ({ children }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const {
    user,
    threshold,
    setThreshold,
    showWarning,
    setShowWarning,
    warningTimestamp,
    setWarningTimestamp,
    warningDatestamp,
    setWarningDatestamp,
    notifyDetails,
    setNotifyDetails,
    selectedActiveSensor,
    setSelectedActiveSensor,
  } = AuthData();
  const [dataStream, setDataStream] = useState([]);

  const navigate = useNavigate();
  const [pauseData, setPauseData] = useState(false);
  const [lastDate, setLastDate] = useState("");
  const [results, setResults] = useState(100);

  const parameter = useParams();

  const series = [
    // {
    //   name: "Energy",
    //   data: dataStream,
    // },
    {
      name: "Energy",
      data: dataStream.map(point => ({
        x: point.x,
        y: point.y,
        fillColor: point.y > threshold ? "red" : undefined, // Set color to red if y is above threshold
      })),
    },
  ];

  const options = {
    chart: {
      id: "realtime",
      type: "line",
      zoom: {
        enabled: true,
        type: "x",
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
      curve: "smooth",
    },
    title: {
      text: "Energy vs time",
      align: "left",
    },
    xaxis: {
      type: "datetime",
      tickAmount: "dataPoints",
      labels: {
        show: false,
        formatter: function (val) {
          // return moment(val).format("HH:mm:ss");
          return moment(val).format("DD-MM-YYYY HH:mm:ss");
        },
      },
    },
    yaxis: {
      min: 0,
      max: 10,
    },
    tooltip: {
      x: {
        // formatter: function (val) {
        //   // return moment(val).format("HH:mm:ss");
        //   return moment(val).format("DD-MM-YYYY HH:mm:ss");
        // },
        formatter: function (index) {
          const point = dataStream[index];
          return moment(point.timestamp).format("DD-MM-YYYY HH:mm:ss");
        },
      },
      y: {
        formatter: function (val) {
          return `Value: ${val.toFixed(2)}`;
        },
      },
    },
  };

  //   const appendData = async (segment) => {
  //     const cumulativeEnergy = segment.reduce(
  //       (sum, dataPoint) => sum + parseFloat(dataPoint.field1),
  //       0
  //     );
  //     const averageCumulativeEnergy =
  //       cumulativeEnergy / 10 + Math.random() * 2 + 1;

  //     setDataStream((prevData) => {
  //       const newData = [
  //         ...prevData,
  //         {
  //           x:
  //             prevData.length === 0
  //               ? moment().valueOf() - 100 * 1000 // Set initial x value as the current moment for the first point
  //               : prevData[prevData.length - 1].x + 10 * 1000, // Set x as prevX + 10 seconds for subsequent points
  //           y: averageCumulativeEnergy.toFixed(2),
  //           originalY: cumulativeEnergy,
  //         },
  //       ];
  //       if (newData.length > 20) {
  //         newData.shift(); // Remove the 0th element
  //       }

  //       return newData;
  //     });

  //     ApexChart.exec("realtime", "updateSeries", [{ data: dataStream }]);
  //   };

  //   useEffect(() => {

  //     if (dataStream) {
  //       const updatedNotificationDetails = [];
  //       dataStream.forEach(item => {
  //         setShowWarning(false);
  //         if (item.y > threshold) {
  //           updatedNotificationDetails.push(item);
  //           setShowWarning(true);
  //           setWarningTimestamp(moment(item.x).format("HH:mm:ss"))
  //           setWarningDatestamp(moment(item.x).format("DD-MM-YYYY"))

  //         }
  //       });
  //       setNotifyDetails(updatedNotificationDetails);
  //     }
  //   }, [dataStream, threshold]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get(
  //           `${API_URL}?api_key=${API_KEY}&results=${results}`
  //         );
  //         const fetchedData = response.data.feeds;
  //         // Calculate cumulative energy for each segment
  //         for (let i = 0; i <= fetchedData.length - 10; i += 10) {
  //           const segment = fetchedData.slice(i, i + 10);
  //           // console.log(RESULTS);
  //           appendData(segment);
  //         }
  //         setResults(10);
  //       } catch (error) {
  //         console.error("Error fetching initial data:", error);
  //       }
  //     };

  //     const intervalId = setInterval(() => {
  //       if (!pauseData) {
  //         // Fetch the latest 10 points every 10 seconds
  //         fetchData();
  //       }
  //     }, 10000); // Fetch data every 10 seconds

  //     // Fetch initial 100 data points on component mount
  //     fetchData();

  //     return () => {
  //       clearInterval(intervalId);
  //     };

  //   }, [pauseData,results]);

  const handleBack = () => {
    navigate("/dashboard");
  };
  const handlePauseResume = () => {
    setPauseData(!pauseData);
  };

  const handleCloseWarning = () => {
    setShowWarning(false);
  };

  useEffect(() => {
    const sensors = JSON.parse(user.user).sensors;
    sensors.forEach((sensor) => {
      if (sensor._id === parameter.sensorId) {
        setThreshold(sensor.threshold);
      }
    });
  }, []);

  useEffect(() => {
    const selectedSensor = JSON.parse(user.user).sensors.find(
      (sensor) => sensor._id === parameter.sensorId
    );
    if (selectedSensor) {
      // setDataStream(selectedSensor.data.slice(0,7));
      // console.log(selectedSensor.data.slice(0,7));
      console.log(selectedSensor.data);
      const points = selectedSensor.data.map((point, index) => ({
        x: index, // Use index as x-coordinate
        y: point.y,
        timestamp: point.x, // Store Unix timestamp for tooltip
        // color: point.y > threshold ? "red" : undefined,
      }));
      setDataStream(points);
      
    }

    ApexChart.exec("realtime", "updateSeries", [{ data: dataStream }]);
  }, [user.user, parameter.sensorId]);

  return (
    <>
      <NavBarProfile id={parameter.sensorId} />
      <div style={{ position: "relative" }}>
        <Chart
          series={series}
          options={options}
          height={400}
          style={{ padding: "1.5rem" }}
        />
        <Threshold />

        <button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "2rem",
            marginBottom: "2rem",
          }}
          onClick={handleShowPopup}

        >
            Show Details
        </button>
        {showPopup && <Popup handleClose={handleClosePopup} />}
      </div>
    </>
  );
};

export default HistoryGraphPage;
