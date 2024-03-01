import React from 'react';
import "../styles/RightComponent.css";
import MenuIcon from './MenuIcon';
import Button from 'react-bootstrap/Button';
import SensorPopup from './SensorPopup';
import { useState } from 'react';
import SensorContainer from './SensorContainer';
import VerticallyCenteredModal from './VerticallyCenteredModal';

const RightDashboard = () => {
  const [modalShow, setModalShow] = useState(false);  
  // console.log(isPopupVisible);
  // const handleAddSensorClick = () => {
  //   setIsPopupVisible(!isPopupVisible); // Toggle visibility
  //   // console.log(isPopupVisible);
  // };
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
          <Button variant="primary" onClick={() => setModalShow(true)}> + Add Devices</Button>
        </div>
      </div>
      {/* Dynamically render sensors using sensors.map */}
      <div className="sensorListContainer">
        {sensors.map((sensor, index) => (
      <div className="sensorList">
        <SensorContainer sensor = {sensor} index = {index}/>
      </div>
        ))}
      </div>
      {modalShow &&   <VerticallyCenteredModal 
        show={modalShow}
        onHide={() => setModalShow(false)}
         onAddSensor={(newSensorData) => {
            setSensors([...sensors, newSensorData]);
         }}
        />}
    {/* // <SensorPopup */}
    {/* //   onClose={() => setIsPopupVisible(false)}
    //   onAddSensor={(newSensorData) => { */}
    {/* //     // Update sensors array here (e.g., using concat or spread operator)
    //     setSensors([...sensors, newSensorData]);
    //   }} */}
    {/* /> */}
  {/* )} */}
    </div>
  );
};

export default RightDashboard;
