import React, { useEffect } from 'react';
import "../styles/RightComponent.css";
import MenuIcon from './MenuIcon';
import Button from 'react-bootstrap/Button';
import SensorPopup from './SensorPopup';
import { useState } from 'react';
import SensorContainer from './SensorContainer';
import VerticallyCenteredModal from './VerticallyCenteredModal';
import { AuthData } from '../services/AuthService';

const RightDashboard = () => {
  const [modalShow, setModalShow] = useState(false);  
  const [loading, setLoading] = useState(false);
  const [sensors, setSensors] = useState([]);
  const {user, setUser} = AuthData();


  const getSensor = async() => {

    setLoading(true);
    user.user !== "" ? setSensors(JSON.parse(user.user).sensors) : setSensors([]);

  };

  useEffect(()=> {
    setLoading(true);
    getSensor();
    setLoading(false);
  }, [user, sensors,modalShow]);





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
        />}
    </div>
  );
};

export default RightDashboard;
