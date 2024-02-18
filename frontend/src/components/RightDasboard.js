import React from 'react';
import "../styles/RightComponent.css";
import MenuIcon from './MenuIcon';
import Button from 'react-bootstrap/Button';
import SensorPopup from './SensorPopup';
import { useState } from 'react';

const RightDashboard = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  
  // console.log(isPopupVisible);
  const handleAddSensorClick = () => {
    setIsPopupVisible(!isPopupVisible); // Toggle visibility
    // console.log(isPopupVisible);
  };
  // Define sensor data as an array of objects
  //This hardcoded array will be replaced with a useState varaible which will get data via an axios request to the backend
  const [sensors, setSensors] = useState([
    {
      name: "Sensor I",
      manufacturer: "Acme Sensors",
      model: "X200",
      parameter: "Temperature",
      thresholdValue: 12,
      status: "active",
    },
    {
      name: "Sensor II",
      manufacturer: "Acme Sensors",
      model: "X200",
      parameter: "Temperature",
      thresholdValue: 12,
      status: "active",
    },
  ]);

  return (
    <div className="rightcontainer">
      <div className="header">
        <div className="registered">Registered Sensors</div>
        <div className="addSensors">
          <Button variant="primary" onClick={handleAddSensorClick}> + Add Devices</Button>
        </div>
      </div>
      {/* Dynamically render sensors using sensors.map */}
      <div className="sensorListContainer">
      <div className="sensorList">
        {sensors.map((sensor, index) => (
          <div key={index} className="sensor">
            <div className="sensorTopDetails">
              <div className="sensorName" style={{ color: "rgb(222, 143, 83)" }}>
                {sensor.name}
              </div>
              <div className="menuIcon">
                <MenuIcon /> {/* Assuming MenuIcon is already imported */}
              </div>
            </div>
            <div className="sensorDetails">
              <p>Manufacturer: {sensor.manufacturer}</p>
              <p>Model: {sensor.model}</p>
              <p>Parameter: {sensor.parameter}</p>
              <p>Threshold Value: {sensor.thresholdValue}</p>
              <p>Status: <span className={sensor.status === "active" ? "active" : ""}>{sensor.status}</span></p>
            </div>
          </div>
        ))}
      </div>
      </div>
      {isPopupVisible && (
    <SensorPopup
      onClose={() => setIsPopupVisible(false)}
      onAddSensor={(newSensorData) => {
        // Update sensors array here (e.g., using concat or spread operator)
        setSensors([...sensors, newSensorData]);
      }}
    />
  )}
    </div>
  );
};

export default RightDashboard;