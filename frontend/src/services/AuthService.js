import { createContext, useContext, useEffect, useState } from "react";
import RenderRoutes from "../routes/RenderRoutes";
import axios from 'axios';
import moment from 'moment';
import ApexChart from 'apexcharts';
import Chart from 'react-apexcharts';


const API_URL = 'https://api.thingspeak.com/channels/2349053/feeds.json';
const API_KEY = '0H5Z4Y2DMQCL7ULK'; // Replace with your API key
let RESULTS = 100; // Number of data points to fetch


const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {

  const [user, setUser] = useState({user : "",isAuthenticated: false});
  const [pauseData, setPauseData] = useState(false);
  const [dataStream, setDataStream] = useState([]);
  const [threshold, setThreshold] = useState(0);
  const [showWarning, setShowWarning] = useState(false);
  const [notifyDetails, setNotifyDetails]= useState([]);
  const [results, setResults] = useState(100);
  const [warningTimestamp, setWarningTimestamp] = useState("");




  useEffect(() => {

    if (dataStream) {
      const updatedNotificationDetails = [];
      dataStream.forEach(item => {
        setShowWarning(false);
        console.log("useEffect", threshold, " ",item.y);
        if (item.y > threshold) {
          updatedNotificationDetails.push(item);
          setShowWarning(true);
          setWarningTimestamp(moment(item.x).format("HH:mm:ss"))
        }
      });
      setNotifyDetails(updatedNotificationDetails);
    }
  }, [dataStream, threshold]);



    return (
      <AuthContext.Provider
        value={{
          user,
          setUser,
          notifyDetails,
          setNotifyDetails,
          threshold,
          setThreshold,
          showWarning,
          setShowWarning,
          dataStream,
          setDataStream,
          warningTimestamp,
          setWarningTimestamp
        }}
      >
          <div className="right-container">
            <RenderRoutes />
          </div>
      </AuthContext.Provider>
    );
  }