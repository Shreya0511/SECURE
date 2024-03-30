import React from "react";
import { useState, useRef } from "react";
import { useEffect } from "react";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { AuthData } from "../services/AuthService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

import "../styles/MenuIcon.css";

const MenuIcon = ({ sensorId }) => {
  const { user, setUser} = AuthData();
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const sensor = JSON.parse(user.user).sensors.find(
    (sensor) => sensor._id === sensorId
  );
  const sensorName = sensor ? sensor.sensorId : "";

  const handleRemove = async() => {
     const DataToSend = {
      sensorId : sensorId,
      userId : JSON.parse(user.user)._id
     }

     try{
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/user/removeSensor`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(DataToSend),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data, "data in menuicon");
          if(data.status === 'success'){
          setUser({user : JSON.stringify(data.data), isAuthenticated: true});

          }
          setShow(false);
        }); 

     }catch(err){
       alert("Error Removing the Sensor, Try again later.");
       setShow(false);
     }
  }

  useEffect(() => {}, [handleRemove]);

  return (
    <>
      {/* <FontAwesomeIcon icon={faBars} ref = {target} onClick={() => setShow(!show)}/> */}

      <OverlayTrigger
        trigger="click"
        key="bottom"
        placement="bottom"
        overlay={
          <Popover className="popover" id="popover-positioned-bottom">
            <Popover.Body>
              <div
                className="sensorMenu"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  color: "white",
                }}
              >
                <div
                  className="sensorMenu"
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "black",
                    textDecoration: "none",
                    marginBottom: "0.5rem",
                  }}
                >
                  {" "}
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    style={{ marginRight: "0.5rem" }}
                  />{" "}
                  Edit
                </div>

                <div
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "black",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                  onClick={handleShow}
                >
                  {" "}
                  <FontAwesomeIcon
                    icon={faTrash}
                    style={{ marginRight: "0.5rem" }}
                  />{" "}
                  Remove
                </div>
              </div>
            </Popover.Body>
          </Popover>
        }
      >
        <FontAwesomeIcon icon={faBars} />
      </OverlayTrigger>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you want to permanently remove{" "}
          <span style={{ color: "chocolate", fontWeight: "bold" }}>
            {sensorName}
          </span>
          ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick = {handleRemove}>Yes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MenuIcon;

{
  /* <FontAwesomeIcon icon={faBars} /> */
}
