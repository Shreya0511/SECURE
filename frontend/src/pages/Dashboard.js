import React from 'react'
import { Link } from "react-router-dom";
import "./../styles/Dashboard.css";
import NavBarProfile from '../components/NavBarProfile';
import LeftSideBar from '../components/LeftSideBar';
import RightComponent from '../components/RightComponent';

const Dashboard = () => {
  return (
    <div>
      <NavBarProfile />
      <div className="dashboardContainer">
      <div className="leftSection bg-dark">
        <LeftSideBar />
        </div>
        <div className="rightSection">
          <div className="dashboardWrapper">
            <RightComponent />
      </div>
    </div>
    </div>
    </div>
  );
}

export default Dashboard
