import React from 'react'
import NavBarProfile from '../components/NavBarProfile'
import LeftSideBar from '../components/LeftSideBar'
import EditForm from '../components/EditForm'

const EditSensor = ({sensorId}) => {
  return (
       <div>
      <NavBarProfile />
      <div className="dashboardContainer">
      <div className="leftSection bg-dark">
        <LeftSideBar />
        </div>
        <div className="rightSection">
          <div className="dashboardWrapper">
            <EditForm sensorId = {sensorId}/>
      </div>
    </div>
    </div>
    </div>
  )
}

export default EditSensor
