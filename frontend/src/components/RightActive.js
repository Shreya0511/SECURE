import React from "react";
import "../styles/RightComponent.css";
import MenuIconAnalysis from "./MenuIconAnalysis";
import Button from "react-bootstrap/Button";
import { AuthData } from "../services/AuthService";

const RightActive = () => {
  const { user, setUser } = AuthData();
  let count = 0;

  return (
    <div className="rightcontainer" style={{}}>
      <div className="header">
        <div className="registered">Active Sensors</div>
      </div>
      <div className="sensorListContainer">
        {JSON.parse(user.user) ? (
          JSON.parse(user.user).sensors.length > 0 ? (
            JSON.parse(user.user).sensors.map((sensor, index) =>
              sensor.status === false ? (
                <div></div>
              ) : (
                <div className="sensorList">
                  {/* {count = count+1  } */}
                  <div key={index} className="sensor" style={{}}>
                    <div className="sensorTopDetails">
                      <div
                        className="sensorName"
                        style={{ color: "rgb(222, 143, 83)" }}
                      >
                        {sensor.sensorId}
                      </div>
                      <div className="menuIcon">
                        <MenuIconAnalysis />
                      </div>
                    </div>
                    <div className="sensorDetails">
                      <p>Power Consumption : {sensor.powerConsumption}</p>
                      <p>Current Supply: {sensor.currentSupply}</p>
                      <p>Voltage Supply: {sensor.voltageSupply}</p>
                    </div>
                  </div>
                </div>
              )
            )
          ) : (
            <div
              style={{ color: "white", fontSize: "1.7rem", fontWeight: "bold" }}
            >
              🤷‍♀️ Oops..No active sensors!!
            </div>
          )
        ) : (
          <div>Login again</div>
        )}
      </div>
    </div>
  );
};

export default RightActive;
