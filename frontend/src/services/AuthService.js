import { createContext, useContext, useEffect, useState } from "react";
import RenderRoutes from "../routes/RenderRoutes";
import axios from 'axios';
import moment from 'moment';
import ApexChart from 'apexcharts';
import Chart from 'react-apexcharts';
import getCookies from "../hooks/getCookies.js";
import setCookies from "../hooks/setCookies.js";
import removeCookies from "../hooks/removeCookies.js";
import { useNavigate } from "react-router-dom";


const API_URL = 'https://api.thingspeak.com/channels/2349053/feeds.json';
const API_KEY = '0H5Z4Y2DMQCL7ULK'; // Replace with your API key
let RESULTS = 100; // Number of data points to fetch


const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({user : "", isAuthenticated: false});
  const [pauseData, setPauseData] = useState(false);
  // const [dataStream, setDataStream] = useState([]);
  const [threshold, setThreshold] = useState(0);
  const [showWarning, setShowWarning] = useState(false);
  const [notifyDetails, setNotifyDetails]= useState([]);
  const [results, setResults] = useState(100);
  const [warningTimestamp, setWarningTimestamp] = useState("");
  const [selectedSensor, setSelectedSensor] = useState("");



  const login = async (email, password) => {
    let userData = {
      email: email,
      password: password,
    };
    setUser({
      user : "shreya",
      isAuthenticated: "true",
    });

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/user/login`,
       {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((data) => {
            if (data.status === "success") {
              const token = data.token;
              removeCookies("jwt");
              setUser({
                user : JSON.stringify(data.data.user),
                isAuthenticated : true,
              });

             setCookies("jwt", token);
              navigate("/dashboard");
            } 
          }
          );
        } catch (err) {
      console.log(err);
      alert("Invalid Credentials!!");
    }
  };


  const checkProtected = async() => {
    if(getCookies("jwt") === undefined){
      setUser({user : "", isAuthenticated: false});
      return;
    }
    let userData = {
      jwt: getCookies("jwt"),
    }

    try{
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/user/isLoggedIn`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.status === 'success'){
        setUser({user : JSON.stringify(data.data), isAuthenticated: true});
        }
      });
    }catch(err){
      alert("Oops Session expired. Please Login again to continue!!");
    }
  }

  const logout = async() => {
    removeCookies("jwt");
    setUser({
      user : "",
      isAuthenticated : false,
    });
  }
  
  useEffect(()=>{
    checkProtected();
  }, [user])

  useEffect(() => {
  }, [login]);




    return (
      <AuthContext.Provider
        value={{
          login,
          logout,
          selectedSensor,
          setSelectedSensor,
          user,
          setUser,
          notifyDetails,
          setNotifyDetails,
          threshold,
          setThreshold,
          showWarning,
          setShowWarning,
          // dataStream,
          // setDataStream,
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