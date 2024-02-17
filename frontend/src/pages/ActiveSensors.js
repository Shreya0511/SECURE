import React from 'react'
import { Link } from "react-router-dom";
import "./../styles/Dashboard.css";
import NavBarProfile from '../components/NavBarProfile';
import LeftSideBar from '../components/LeftSideBar';
// import RightComponent from '../components/RightComponent';
import RightActive from '../components/RightActive';

const ActiveSensors = () => {
  return (
    <div>
      <NavBarProfile />
      <div className="dashboardContainer">
      <div className="leftSection bg-dark">
        <LeftSideBar />
        </div>
        <div className="rightSection">
          <div className="dashboardWrapper">
            <RightActive />
      </div>
    </div>
    </div>
    </div>
  );
}

export default ActiveSensors
