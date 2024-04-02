import React from 'react'
import NavBarProfile from '../components/NavBarProfile';
import ProfileSideBar from '../components/ProfileSideBar';
import ProfileDetails from './ProfileDetails';
import ProfileDetailsEditContainer from '../components/ProfileDetailsEditContainer';

const EditProfileDetails = () => {
  return (
    <div>
      <NavBarProfile />
      <div className="dashboardContainer">
      <div className="leftSection bg-dark">
          <ProfileSideBar />
        </div>
        <div className="rightSection">
          <div className="dashboardWrapper">
            <ProfileDetailsEditContainer />
      </div>
    </div>
    </div>
    </div>
  )
}

export default EditProfileDetails

