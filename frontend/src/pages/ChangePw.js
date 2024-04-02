import React from 'react';
import NavBarProfile from '../components/NavBarProfile';
import ProfileSideBar from '../components/ProfileSideBar';
import ChangePassword from '../components/ChangePassword';

const ChangePw = () => {
  return (
    <div>
        <NavBarProfile />
      <div className="dashboardContainer">
      <div className="leftSection bg-dark">
          <ProfileSideBar />
        </div>
        <div className="rightSection">
          <div className="dashboardWrapper">
           <ChangePassword />
      </div>
    </div>
    </div>
      
    </div>
  )
}

export default ChangePw
