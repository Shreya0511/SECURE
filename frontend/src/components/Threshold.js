import React, { useState, useEffect } from 'react';
import { AuthData } from '../services/AuthService';

const Threshold = ({onThresholdChange }) => {
  const {threshold} = AuthData();
  // console.log("sensorselected", selectedActiveSensor);
  // console.log("user", user.user);




  return (
    <div style={{ marginBottom: '1rem', marginLeft : "2rem" }}>
      {/* <label>
        Threshold:
        <input type="number" value={inputValue} onChange={handleInputChange} />
      </label>
      <button onClick={handleApplyThreshold}>Apply Threshold</button> */}
      <p style ={{fontWeight : "medium"}}>Currently Set Threshold: <span style ={{fontWeight : "bold"}}>{threshold}</span></p>
    </div>
  );
};

export default Threshold;
