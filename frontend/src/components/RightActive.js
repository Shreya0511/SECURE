import React from 'react';
// import "../styles/RightComponent.css";
import MenuIcon from './MenuIcon';
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
    // Add more sensor objects as needed
  ];
  // <p>Power Consumption - P Kw</p>
  //               <p>Current Supply - I A</p>
  //               <p>Voltage Supply - V V</p>
  return (
    <div className = "rightcontainer">
        <div className = "header">
            <div className = "registered">Active Sensors</div>
            {/* <div className = "addSensors"> <Button variant="primary">+ Add Devices</Button>{' '}</div> */}
        </div>
        <div>
            {sensors.map((sensor, index) => (
          <div className="sensorList" style ={{marginBottom : "1.5rem"}}>
          <div key={index} className="sensor">
            <div className="sensorTopDetails">
              <div className="sensorName" style={{ color: "rgb(222, 143, 83)" }}>
                {sensor.name}
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
