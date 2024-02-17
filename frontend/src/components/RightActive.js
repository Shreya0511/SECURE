import React from 'react';
import "../styles/RightComponent.css";
import MenuIcon from './MenuIcon';
import Button from 'react-bootstrap/Button';


const RightActive = () => {
  return (
    <div className = "rightcontainer">
        <div className = "header">
            <div className = "registered">Active Sensors</div>
            {/* <div className = "addSensors"> <Button variant="primary">+ Add Devices</Button>{' '}</div> */}
        </div>
          <div className="sensorList">
            <div className = "sensorTopDetails">
              <div className = "sensorName" style ={{color : "rgb(222, 143, 83)"}}>Sensor I</div>
        
              </div>
              <div className="sensorDetails">
                <p>Power Consumption - P Kw</p>
                <p>Current Supply - I A</p>
                <p>Voltage Supply - V V</p>
                
              </div>
            </div>
          </div>
  )
}

export default RightActive
