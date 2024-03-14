import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/Navbar.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import moment from "moment";


const NavBarProfile = ({ notifications }) => {
  
  // const formattedTime = moment(notifications[0].x).format("HH:mm:ss");
  let formattedTime = notifications.length > 0 ? moment(notifications[0].x).format("HH:mm:ss") : "";




  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
    {notifications ? 
    // (
    //   notifications.map((detail, index) => {
    //     const formattedTime = moment(detail.x).format("HH:mm:ss"); // Format x using Moment.js

    //     return (
    //       <div key={index} style ={{backgroundColor : "gray", width : "12rem"}}>
    //         <p>Sensor-I has crossed its threshold at : {formattedTime}</p>
    //         {/* <p>Y: {detail.y}</p>
    //         <p>Original Y: {detail.originalY}</p> */}
    //         {/* Add additional properties as needed */}
    //       </div>
    //     );
    //   })
    // ) 
    (         
              <div style ={{backgroundColor : "", borderRadius : "1rem", color : "white", fontWeight: "bold", fontSize : "1rem", margin: "1rem"}}>
                <p><span style ={{color : "chocolate"}}>Sensor-I </span> has crossed its threshold at {formattedTime} hrs</p>
                {/* <p>Y: {detail.y}</p>
                <p>Original Y: {detail.originalY}</p> */}
                {/* Add additional properties as needed */}
              </div>
            )
    : (
      <p>Nothing to show</p>
    )}
  </Tooltip>
  );

  useEffect(()=>{
    console.log("hello");
    renderTooltip();
  }, [notifications])



  const handleNotificationStack = () => {};
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" className="navbar_main_container">
        <Container className="navbar_container">
          <div className="navbarSecure">
            <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
              <span className="firstLetter">S</span>ECURE
            </Link>
          </div>
          <div className="navbarMenu">
            <Link
              to="/home"
              className={
                window.location.pathname === "/" ? "activet" : "inactivet"
              }
              href="/"
              style={{ textDecoration: "none" }}
            >
              Home
            </Link>
            <Link
              to="/aboutUs"
              className={
                window.location.pathname === "/aboutUs"
                  ? "activet"
                  : "inactivet"
              }
              href="/aboutUs"
              style={{ textDecoration: "none" }}
            >
              About Us
            </Link>
            <Link
              to="/contactUs"
              className={
                window.location.pathname === "/contactUs"
                  ? "activet"
                  : "inactivet"
              }
              href="/contactUs"
              style={{ textDecoration: "none" }}
            >
              Contact Us
            </Link>
            <div>
              {/* {console.log("ntf", notifications.length)} */}
              {notifications.length > 0 ? (
                <div>
                  {" "}
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 300, hide: 400 }}
                    overlay={renderTooltip}
                  >
                    <div>
                      <div
                        style={{
                          height: "0.5rem",
                          width: "0.5rem",
                          borderRadius: "50%",
                          backgroundColor: "red",
                          position: "relative",
                          top: "0.3rem",
                          left: "0.7rem",
                        }}
                      ></div>
                      <FontAwesomeIcon
                        style={{ fontSize: "1.5rem" }}
                        icon={faBell}
                        onClick={handleNotificationStack}
                      />

                    </div>
                  </OverlayTrigger>{" "}
                </div>
              ) : (
                <FontAwesomeIcon style={{ fontSize: "1.5rem" }} icon={faBell} />
              )}
            </div>

            <div className="Profile" style={{ display: "flex" }}>
              <div
                className="profImage"
                style={{
                  borderRadius: "50%",
                  backgroundColor: "white",
                  height: "2.5rem",
                  width: "2.5rem",
                }}
              >
                <img
                  style={{
                    height: "2.5rem",
                    width: "2.5rem",
                    borderRadius: "50%",
                  }}
                  src="https://as2.ftcdn.net/v2/jpg/05/89/93/27/1000_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.jpg"
                />
              </div>
              <div
                className="userName"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "0.8rem",
                  fontWeight: "medium",
                  fontSize: "1.3rem",
                  color: "rgb(222, 143, 83)",
                }}
              >
                User
              </div>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarProfile;
