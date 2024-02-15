import React from 'react'
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import "./../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <div className="dashboardContainer">
      <div className="leftSection">
          <h2>Your space</h2>
          <ul className="navigationLinks">
            <li>
              <Link to="/" className="navigationLink">Dashboard</Link>
            </li>
            <li>
              <Link to="/active-sensors" className="navigationLink">Active Sensors</Link>
            </li>
            <li>
              <Link to="/analysis" className="navigationLink">Analysis</Link>
            </li>
            <li>
              <Link to="/notifications" className="navigationLink">Notifications</Link>
            </li>
          </ul>
        </div>
        <div className="rightSection">
          <div className="dashboardWrapper">
            <h2>Registered Sensors</h2>
          <button className="addSensorButton">+ Add Sensor</button>
          </div>
          
          <ul className="sensorList">
            <li>
              <h3>Sensor-1</h3>
              <div className="sensorDetails">
                <p>Manufacturer -</p>
                <p>Model -</p>
                <p>Parameter -</p>
                <p>Threshold Value - 12 kwh</p>
                <p>Status - Active</p>
              </div>
              <div className="sensorActions">
                <button>Change Status</button>
                <button>Remove</button>
              </div>
            </li>
            {/* Add more sensor items as needed */}
          </ul>
        </div>
        {/* Content for the main section will go here */}
      </div>
    </div>
  );
}

export default Dashboard
