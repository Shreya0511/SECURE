import React from 'react';
import "../styles/RightComponent.css";
import "../styles/SensorPopup.css"
import MenuIcon from './MenuIcon';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const SensorPopup = ({ onClose, onAddSensor }) => {
    const [sensorData, setSensorData] = useState({
      name: "",
      manufacturer: "",
      model: "",
      parameter: "",
      thresholdValue: "",
    });
  
    const handleInputChange = (event) => {
      setSensorData({
        ...sensorData,
        [event.target.name]: event.target.value,
      });
    };
  
    const handleAddClick = () => {
      // Add validation here
  
      onAddSensor(sensorData); // Pass new sensor data to parent
      onClose(); // Close the popup
    };
  
    return (
      <div className="sensor-popup-container">
        <div className="sensor-popup-header">
          <h2>Add Sensor</h2>
          <span className="close-button" onClick={onClose}>&times;</span>
        </div>
        <div className="sensor-popup-form">
          <form>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={sensorData.name}
              onChange={handleInputChange}
            />
            <label htmlFor="name">Manufacturer:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={sensorData.name}
              onChange={handleInputChange}
            />
            <label htmlFor="name">Model:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={sensorData.name}
              onChange={handleInputChange}
            />
            <label htmlFor="name">Parameter:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={sensorData.name}
              onChange={handleInputChange}
            />
            <label htmlFor="name">Threshold Value:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={sensorData.name}
              onChange={handleInputChange}
            />
            
            {/* Add similar inputs for other sensor data fields */}
            <button type="button" onClick={handleAddClick}>
              Add Sensor
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default SensorPopup;