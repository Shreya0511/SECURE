import React from "react";
import NavBar from "../components/NavBar";
import "./../styles/Home.css";
const Home = () => {
  return (
    <div>
      <NavBar />
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
        <div className="buttonGroup">
          <a href="/login" style={{ textDecoration: "none" }}>
            <div className="loginBtn">Login</div>
          </a>
          <a href="/signup" style={{ textDecoration: "none" }}>
            <div className="signupBtn">SignUp</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
