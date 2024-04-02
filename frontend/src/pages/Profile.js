import React from 'react'
import { Link } from "react-router-dom";
import "./../styles/Dashboard.css";
import NavBarProfile from '../components/NavBarProfile';
import ProfileSideBar from '../components/ProfileSideBar';
import ProfileDetails from './ProfileDetails';
// import RightComponent from '../components/RightComponent';
import RightDashboard from '../components/RightDasboard';
const Dashboard = () => {
  return (
    <div>
      <NavBarProfile />
      <div className="dashboardContainer">
      <div className="leftSection bg-dark">
          <ProfileSideBar />
        </div>
        <div className="rightSection">
          <div className="dashboardWrapper">
            <ProfileDetails />

      </div>
    </div>
    </div>
    </div>
  );
}

export default Dashboard
