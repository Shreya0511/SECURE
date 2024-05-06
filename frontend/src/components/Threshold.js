import React, { useState, useEffect } from 'react';
import { AuthData } from '../services/AuthService';

const Threshold = () => {
  const {threshold} = AuthData();




  return (
    <div style={{ marginBottom: '1rem', marginLeft : "2rem" }}>
      <p><span style ={{fontWeight : "bold"}}>Currently Set Threshold: </span><span style ={{}}>{threshold}</span></p>
    </div>
  );
};

export default Threshold;
