import React from 'react';
import NavBarProfile from '../components/NavBarProfile';
import LeftSideBar from '../components/LeftSideBar';
import RightActive from '../components/RightActive';
import SensorCards from '../components/SensorCardsCotainer';

const History = () => {
  return (
    <div>
    <NavBarProfile />
    <div className="dashboardContainer">
    <div className="leftSection bg-dark">
      <LeftSideBar />
      </div>
      <div className="rightSection">
        <div className="dashboardWrapper">
         <SensorCards />
    </div>
  </div>
  </div>
  </div>
  )
}

export default History

