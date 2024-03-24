import React from 'react';
import { useState, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";


import "../styles/MenuIcon.css";


const MenuIcon = () => {
    const [show, setShow] = useState(false);
    const target = useRef(null);
  
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
                 <Link className = "sensorMenu" style ={{textDecoration: "none"}}to = "/change_status"><div className = "sensorMenu" style ={{fontSize : "1rem", fontWeight: "bold", color : "black", textDecoration: "none", marginBottom : "0.5rem"}}> <FontAwesomeIcon icon={faPenToSquare} style ={{marginRight : "0.5rem"}}/> Edit</div></Link>
                 <Link style ={{textDecoration : "none"}} to = "/remove">  <div style ={{fontSize : "1rem", fontWeight : "bold", color : "black", textDecoration: "none"}}> <FontAwesomeIcon icon={faTrash} style ={{marginRight : "0.5rem"}}/> Remove</div></Link> 
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

export default MenuIcon

{/* <FontAwesomeIcon icon={faBars} /> */}
