import React from 'react';
import "../styles/RightComponent.css";
import MenuIcon from './MenuIcon';
import Button from 'react-bootstrap/Button';


const RightDashboard = () => {
  return (
    <div className = "rightcontainer">
        <div className = "header">
            <div className = "registered">Registered Sensors</div>
            <div className = "addSensors"> <Button variant="primary">+ Add Devices</Button>{' '}</div>
        </div>
          <div className="sensorList">
            <div className = "sensorTopDetails">
              <div className = "sensorName" style ={{color : "rgb(222, 143, 83)"}}>Sensor I</div>
              <div className = "menuIcon">
                <MenuIcon />
              </div>
              </div>
              <div className="sensorDetails">
                <p>Manufacturer -</p>
                <p>Model -</p>
                <p>Parameter -</p>
                <p>Threshold Value - 12 kwh</p>
                <p>Status - <span className = "active">Active</span></p>
              </div>
            </div>
          </div>
  )
}

export default RightDashboard
