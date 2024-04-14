import React from "react";
import NavBarProfile from "../components/NavBarProfile";
import LeftSideBar from "../components/LeftSideBar";
import moment from "moment";
import  { useEffect, useState } from "react";
import { AuthData } from "../services/AuthService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

const NotificationsPage = () => {
  const parameter= useParams();

  const { notifications, notifyDetails, setNotifyDetails } = AuthData();
  const [sensorId, setSensorId] = useState('');
  const {user} = AuthData();


  const handleRemoveNotification = (detailToRemove) => {
    const indexToRemove = notifyDetails.findIndex(notification => 
      notification.x === detailToRemove.x &&
      notification.y === detailToRemove.y &&
      notification.originalY === detailToRemove.originalY
    );
  
    if (indexToRemove !== -1) {
      const updatedNotifyDetails = [...notifyDetails.slice(0, indexToRemove), ...notifyDetails.slice(indexToRemove + 1)];
  
      setNotifyDetails(updatedNotifyDetails);
    } else {
      console.error("Notification not found in the array.");
    }
  };


  useEffect(() => {
    if (JSON.parse(user.user) && JSON.parse(user.user).sensors.length > 0) {
      const sensor = JSON.parse(user.user).sensors.find(sensor => sensor._id === parameter.sensorId);
      if (sensor) {
        setSensorId(sensor.sensorId);
      }
    }
  }, [user.user, sensorId]);
  
  
  

  return (
    <div>
      <NavBarProfile />
      <div className="dashboardContainer">
        <div className="leftSection bg-dark">
          <LeftSideBar />
        </div>
        <div className="rightSection" style={{ backgroundColor: "white", display : "flex", flexDirection : 'row'}}>
          <div className="dashboardWrapper" style ={{display : "flex", flexDirection : "column", height: "100vh", overflowY: "scroll"}}>
            {notifyDetails.length > 0 ? (
              notifyDetails.map((detail, index) => {
                const formattedDate = moment(detail.x).format("DD-MM-YYYY"); // Format x using Moment.js
                const formattedTime = moment(detail.x).format("HH:mm:ss"); // Format x using Moment.js
                
                return (
                  <div
                    key={index}
                    style={{
                      marginTop: "5rem",
                      width: "70vw",
                      height: "5rem",
                      padding: "1rem",
                      boxShadow:
                        "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                      display: "flex",
                      // justifyContent: "center",
                      alignItems: "center",
                      fontSize: "1.3rem",
                      marginBottom : "0rem",
                      marginTop: "2.3rem"
                    }}
                  >
                    <div style ={{flex : "5"}}>
                    <FontAwesomeIcon
                      style={{
                        fontSize: "2rem",
                        marginRight: "1rem",
                        backgroundColor: "",
                      }}
                      icon={faTriangleExclamation}
                    />
                    <span style ={{color : "chocolate",fontWeight: "bold", marginRight: "0.5rem"}}>{sensorId}</span> has crossed its threshold on {formattedDate} at {formattedTime}
                    </div>

                    <div style={{flex : "1", display : "flex", alignItems: "center", justifyContent: "center"}}><Link style ={{textDecoration: "none", color : "red", fontSize : "1rem", fontWeight: "bold"}}to = "/readData/:sensorId">  Monitor</Link></div>

                    <div style ={{display :  "flex", position: "relative", top: "-1rem", left : "0.5rem", color : "gray", fontWeight: "bold", cursor : "pointer"}} onClick={() => handleRemoveNotification(detail)}>X</div>
                  </div>
                );
              })
            ) : (
              <div style={{display : "flex", alignItems : "center", justifyContent: "center", fontSize : "2rem", color : "black", marginTop: "5rem", fontWeight: "bold"}}>Oops!! Nothing to Show....🤷‍♀️</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
