import React from 'react';
// import "../styles/RightComponent.css";
import "../styles/SensorPopup.css"
import MenuIcon from './MenuIcon';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


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

      <></>
    );
  };
  
  export default SensorPopup;


//   <div className="sensor-popup-container">
//   <div className="sensor-popup-header">
//     <h2>Add Sensor</h2>
//     <span className="close-button" onClick={onClose}>&times;</span>
//   </div>
//   <div className="sensor-popup-form">
//     <form>
//       <label htmlFor="name">Name:</label>
//       <input
//         type="text"
//         id="name"
//         name="name"
//         value={sensorData.name}
//         onChange={handleInputChange}
//       />
//       <label htmlFor="name">Manufacturer:</label>
//       <input
//         type="text"
//         id="manufacturer"
//         name="manufacturer"
//         value={sensorData.manufacturer}
//         onChange={handleInputChange}
//       />
//       <label htmlFor="name">Model:</label>
//       <input
//         type="text"
//         id="model"
//         name="model"
//         value={sensorData.model}
//         onChange={handleInputChange}
//       />
//       <label htmlFor="name">Parameter:</label>
//       <input
//         type="text"
//         id="parameter"
//         name="parameter"
//         value={sensorData.parameter}
//         onChange={handleInputChange}
//       />
//       <label htmlFor="name">Threshold Value:</label>
//       <input
//         type="text"
//         id="thresholdValue"
//         name="thresholdValue"
//         value={sensorData.thresholdValue}
//         onChange={handleInputChange}
//       />
      
//       {/* Add similar inputs for other sensor data fields */}
//       <button type="button" onClick={handleAddClick}>
//         Add Sensor
//       </button>
//     </form>
//   </div>
// </div>
