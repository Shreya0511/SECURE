import React from 'react';
import "../styles/RightComponent.css";
import MenuIconAnalysis from './MenuIconAnalysis';
import Button from 'react-bootstrap/Button';


const RightActive = () => {
  // Define sensor data as an array of objects
  //This hardcoded array will be replaced with a useState varaible which will get data via an axios request to the backend
  const sensors = [
    {
      name: "Sensor I",
      power:9000,
      current:100,
      voltage:90

    },
    {
      name: "Sensor II",
      power:9000,
      current:100,
      voltage:90
    },
  ];
  return (
    <div className = "rightcontainer" style ={{}}>
        <div className = "header">
            <div className = "registered">Active Sensors</div>
        </div>
        <div className = "sensorListContainer">
            {sensors.map((sensor, index) => (
          <div className="sensorList">
          <div key={index} className="sensor" style ={{}}>
            <div className="sensorTopDetails">
              <div className="sensorName" style={{ color: "rgb(222, 143, 83)" }}>
                {sensor.name}
              </div>
              <div className = "menuIcon">
                <MenuIconAnalysis />
              </div>
            </div>
            <div className="sensorDetails">
              <p>Power Consumption : {sensor.power}</p>
              <p>Current Supply: {sensor.current}</p>
              <p>Voltage Supply: {sensor.voltage}</p>
            </div>
          </div>
          </div>
        ))}
            </div>
          </div>
  )
}

export default RightActive
