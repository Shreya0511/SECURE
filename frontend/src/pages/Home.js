import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import "./../styles/Home.css";
import {AuthData} from "./../services/AuthService";
import NavBarProfile from "../components/NavBarProfile";
const Home = () => {
  const {user} = AuthData();
  return (
    <div>
      {user.isAuthenticated ? <NavBarProfile /> : <NavBar />}
      <div className="mainContainer">
        <div className="secureHeading">
          <div className="name">
            <span className="firstLetter">S</span>ECURE
          </div>
          <div className="fullForm">
            Smart Energy Consumption and Over-Usage Detection System with
            Real-Time Alerts
          </div>
        </div>

        {!user.isAutheticated ? 
        <div className="buttonGroup">
          {/* <a href="/login" style={{ textDecoration: "none" }}>
            <div className="loginBtn">Login</div>
          </a> */}
          <Link to="/login" style={{ textDecoration: "none" }}>
            <div className="loginBtn" >Login</div>

          </Link>
          {/* <a href="/signup" style={{ textDecoration: "none" }}>
            <div className="signupBtn">SignUp</div>
          </a> */}
          <Link to="/signup" style={{ textDecoration: "none" }}>
          <div className="signupBtn" >SignUp</div>
          </Link>
        </div> : <></>}
      </div>
    </div>
  );
};

export default Home;
