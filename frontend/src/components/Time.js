import React from "react";

const Time = ({setTime}) => {
    return (
        console.log("Time: ", setTime),
        <div style={{ marginBottom: '1rem', marginLeft : "2rem" }}>
          <p><span style ={{fontWeight : "bold"}}>Currently Set Time:</span> <span>{setTime} min</span></p>
        </div>
      );
  
};

export default Time;
