import React, { useState, useEffect } from 'react';
import { AuthData } from '../services/AuthService';

const Threshold = () => {
  const {threshold} = AuthData();




  return (
    <div style={{ marginBottom: '1rem', marginLeft : "2rem" }}>
      <p style ={{fontWeight : "medium"}}>Currently Set Threshold: <span style ={{fontWeight : "bold"}}>{threshold}</span></p>
    </div>
  );
};

export default Threshold;
