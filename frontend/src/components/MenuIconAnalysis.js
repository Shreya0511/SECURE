import React from 'react';
import { useState, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import "../styles/MenuIcon.css";
import { AuthData } from '../services/AuthService';


const MenuIconAnalysis = ({sensor}) => {
  const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const target = useRef(null);
    const {user, selectedActiveSensor, setSelectedActiveSensor} = AuthData();

    const handleMonitoring = () => {
      setSelectedActiveSensor(sensor._id);
      navigate("/readData");
    };

    
  
    return (
      <>
        {/* <FontAwesomeIcon icon={faBars} ref = {target} onClick={() => setShow(!show)}/> */}

        <OverlayTrigger
          trigger="click"
          key='bottom'
          placement='bottom'
          overlay={
            <Popover className = "popover" id='popover-positioned-bottom'>
              <Popover.Body>
                <div className = "sensorMenu" style ={{display : "flex", flexDirection : "column", color : "white"}}>
                 {/* <Link className = "sensorMenu" style ={{textDecoration: "none"}} to = "/readData"> */}
                  <div className = "sensorMenu" style ={{fontSize : "1rem", fontWeight: "bold", color : "black", textDecoration: "none", marginBottom : "0.5rem", cursor : "pointer"}} onClick = {handleMonitoring}>Monitoring</div>
                  {/* </Link> */}
                 <Link style ={{textDecoration : "none"}} to = "/readData">  <div style ={{fontSize : "1rem", fontWeight : "bold", color : "black", textDecoration: "none",  marginBottom : "0.5rem"}}>History</div></Link> 
                 <Link style ={{textDecoration : "none"}} to = "/readData">  <div style ={{fontSize : "1rem", fontWeight : "bold", color : "black", textDecoration: "none"}}>Predictions</div></Link> 

                </div>
              </Popover.Body>
            </Popover>
          }
        >
          <FontAwesomeIcon icon={faBars}/>
        </OverlayTrigger>
      </>
    );
}

export default MenuIconAnalysis

{/* <FontAwesomeIcon icon={faBars} /> */}
