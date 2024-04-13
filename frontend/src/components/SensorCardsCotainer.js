import React from "react";
import { AuthData } from "../services/AuthService";
import SensorCard from "./SensorCard";


const SensorCards = () => {
  const {user} = AuthData();
  return (
    <div className="rightcontainer">
      <div className="header">
        <div className="registered">Registered Sensors</div>
      </div>

      <div style ={{display : "flex", flexWrap : "wrap", justfiyContent : "center"}}>
        {JSON.parse(user.user) ? (
          JSON.parse(user.user).sensors.length > 0 ? (
            JSON.parse(user.user).sensors.map((sensor, index) =>
                <div>
                 <SensorCard sensor = {sensor}/>
                  </div>
              )
            )
           : (
            <div
              style={{ color: "white", fontSize: "1.7rem", fontWeight: "bold" }}
            >
              🤷‍♀️ Oops..No Registered sensors!!
            </div>
          )
        ) : (
          <div>Login again</div>
        )}
      </div>
    </div>
  );
};

export default SensorCards;
