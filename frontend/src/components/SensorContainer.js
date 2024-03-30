import React from 'react';
import MenuIcon from './MenuIcon';
import "../styles/RightComponent.css";


const SensorContainer = ({sensor, index}) => {
  return (
    <div key={index} className="sensor" >
            <div className="sensorTopDetails">
              <div className="sensorName" style={{ color: "rgb(222, 143, 83)" }}>
                {sensor.sensorId}
              </div>
              <div className="menuIcon">
                <MenuIcon sensorId = {sensor._id}/> {/* Assuming MenuIcon is already imported */}
              </div>
            </div>
            <div className="sensorDetails">
              <p>Manufacturer: {sensor.manufacturer}</p>
              <p>Model: {sensor.model}</p>
              <p>Parameter: {sensor.parameter}</p>
              <p>Threshold Value: {sensor.threshold}</p>
              <p>Status: <span className={sensor.status === true ? "active" : ""}>{sensor.status === true ? "active" : "inactive"}</span></p>
            </div>
          </div>
  )
}

export default SensorContainer
