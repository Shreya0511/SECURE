import React from "react";

const Time = ({setTime}) => {
    return (
        console.log("Time: ", setTime),
        <div style={{ marginBottom: '1rem', marginLeft : "2rem" }}>
          <p style ={{fontWeight : "medium"}}>Currently Set Time: <span style ={{fontWeight : "bold"}}>{setTime} min</span></p>
        </div>
      );
  
};

export default Time;
