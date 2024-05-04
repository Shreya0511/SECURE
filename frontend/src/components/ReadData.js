import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import ApexChart from "apexcharts";
import Chart from "react-apexcharts";
import NavBarProfile from "./NavBarProfile";
import { useNavigate } from "react-router-dom";
import Threshold from "./Threshold";
import { AuthData } from "../services/AuthService";
import { useParams } from "react-router-dom";
import Time from "./Time";

const API_URL = "https://api.thingspeak.com/channels/2349053/feeds.json";
const API_KEY = "0H5Z4Y2DMQCL7ULK"; // Replace with your API key

const ReadData = ({ children }) => {
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
  const [time, setTime] = useState(5);
  const navigate = useNavigate();
  const [pauseData, setPauseData] = useState(false);
  const [lastDate, setLastDate] = useState("");
  const [results, setResults] = useState(100);

  const parameter = useParams();

  const series = [
    {
      name: "Energy",
      data: dataStream,
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
      max: 75,
    },
    tooltip: {
      x: {
        formatter: function (val) {
          // return moment(val).format("HH:mm:ss");
          return moment(val).format("DD-MM-YYYY HH:mm:ss");
        },
      },
      y: {
        formatter: function (val) {
          return `Value: ${val.toFixed(2)}`;
        },
      },
    },
  };

  useEffect(() => {
    if (dataStream) {
      const updatedNotificationDetails = [];
      dataStream.forEach((item) => {
        setShowWarning(false);
        if (item.y > threshold) {
          updatedNotificationDetails.push(item);
          setShowWarning(true);
          setWarningTimestamp(moment(item.x).format("HH:mm:ss"));
          setWarningDatestamp(moment(item.x).format("DD-MM-YYYY"));
        }
      });
      setNotifyDetails(updatedNotificationDetails);
    }
  }, [dataStream, threshold]);

  useEffect(() => {
    const sensors = JSON.parse(user.user).sensors;
    sensors.forEach((sensor) => {
      if (sensor._id === parameter.sensorId) {
        setThreshold(sensor.threshold);
      }
    });
  }, []);

  useEffect(() => {
    const sensorData = JSON.parse(user.user).sensors.find(
      (sensor) => sensor._id === parameter.sensorId
    );
    if (sensorData) {
      setDataStream(sensorData.data.slice(-10)); // Get the last 10 points
      setThreshold(sensorData.threshold);
    }
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchData(); // Fetch latest point every 10 seconds
    }, 20000);

    fetchData(); // Fetch initial data

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const login = async (email, password) => {
    let sensorData = {
      id:parameter.sensorI,
    };
   

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/v1/sensor/fetchLast`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sensorData),
        }
      )
        .then((response) => response.json())
    } catch (err) {
      console.log(err);
      alert("Invalid Credentials!!");
    }
  };

  const fetchData = async () => {
    // console.log("Fetching data...");
    // const sensorData = JSON.parse(user.user).sensors.find(
    //   (sensor) => sensor._id === parameter.sensorId
    // );
    let Data = {
      id:parameter.sensorId,
    };
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/sensor/fetchLast`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Data),
      }
    ).then((response) => response.json())
    const sensorData=response.data;
    console.log(sensorData);
    if (sensorData) {
      
      setDataStream((prevDataStream) => [
        ...prevDataStream,
        sensorData,
      ]); // Add the last point from sensor data to the existing dataStream
      // setThreshold(sensorData.threshold);
    }
  };

  const handleBack = () => {
    navigate("/dashboard");
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
  const handleTimeChange = (newTime) => {
    axios.post(`${process.env.REACT_APP_API_URL}/api/updateGlobal`, {
      value: newTime,
    }).then((response) => {
      console.log(response.data);
    });
    window.alert(`Time changed to ${newTime} seconds`);
    setTime(newTime);
  };
  // console.log(time.toString())

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
        <Threshold onThresholdChange={handleThresholdChange} />
        
        <Time setTime={time.toString()}  />
        <div style={{ marginBottom: '1rem', marginLeft: '2rem' }}>
        <p>Change Time</p>
          <button onClick={() => handleTimeChange(5)}>5</button>
          <button onClick={() => handleTimeChange(10)}>10</button>
          <button onClick={() => handleTimeChange(15)}>15</button>
        </div>
        {showWarning && (
          <div
            className="warning-popup"
            style={{
              position: "absolute",
              top: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              padding: "10px",
              background: "rgba(255, 0, 0, 0.7)",
              color: "white",
              borderRadius: "5px",
              zIndex: "9999",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div>
              <p>
                {`Warning! Threshold crossed on: ${warningDatestamp} at time : ${warningTimestamp}`}{" "}
              </p>
            </div>
            <div
              style={{
                position: "relative",
                bottom: "0.7rem",
                left: "0.9rem",
                marginLeft: "1rem",
              }}
            >
              <button
                onClick={handleCloseWarning}
                style={{
                  background: "none",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                &#10006;
              </button>
            </div>
          </div>
        )}
        
      </div>
    </>
  );
};

export default ReadData;
