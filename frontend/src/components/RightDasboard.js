import React, { useEffect } from 'react';
import "../styles/RightComponent.css";
import MenuIcon from './MenuIcon';
import Button from 'react-bootstrap/Button';
import SensorPopup from './SensorPopup';
import { useState } from 'react';
import SensorContainer from './SensorContainer';
import VerticallyCenteredModal from './VerticallyCenteredModal';

const RightDashboard = () => {
  const [modalShow, setModalShow] = useState(false);  
  const [loading, setLoading] = useState(false);
  // const [sensors, setSensors] = useState([
  //   {
  //     name: "Sensor I",
  //     manufacturer: "Acme Sensors",
  //     model: "X200",
  //     parameter: "Temperature",
  //     thresholdValue: 12,
  //     status: "active",
  //   },
  //   {
  //     name: "Sensor II",
  //     manufacturer: "Acme Sensors",
  //     model: "X200",
  //     parameter: "Temperature",
  //     thresholdValue: 12,
  //     status: "active",
  //   },
  // ]);
  const [sensors, setSensors] = useState([]);


  const getSensor = async() => {
    setLoading(true);
    try{
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/v1/sensor/getSensors`,
        {
          method : "GET",
          headers: {
            "Content-Type": "application/json",
            // authorization: `Bearer ${getCookies("jwt")}`,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":
              "Origin, X-Requested-With, Content-Type, Accept, Z-Key",
            "Access-Control-Allow-Methods":
              "GET, HEAD, POST, PUT, DELETE,PATCH, OPTIONS",
          },
             }
        )
        .then((response) => response.json())
        .then((data) => {
           if(data.status === 'success'){
            setSensors(data.sensors);
           }
        });
    } catch(err){
      console.log(err);
    }
  };

  useEffect(()=> {
    setLoading(true);
    getSensor();
    setLoading(false);
  }, []);





  return (
    <div className="rightcontainer">
      <div className="header">
        <div className="registered">Registered Sensors</div>
        <div className="addSensors">
          <Button variant="primary" onClick={() => setModalShow(true)}> + Add Sensor</Button>
        </div>
      </div>
      {/* Dynamically render sensors using sensors.map */}
      <div className="sensorListContainer">
        {loading ? <div style ={{color : "white", fontSize : "2rem"}}>Hello</div> : 
        sensors.length > 0 ? sensors.map((sensor, index) => (
      <div className="sensorList">
        <SensorContainer sensor = {sensor} index = {index}/>
      </div>
        )) : <div style ={{color : "white", fontSize : "1.7rem", fontWeight : "bold"}}>🤷‍♀️ Oops...No sensors added yet!!</div>}
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
