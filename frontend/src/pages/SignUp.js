import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import "./../styles/Home.css";
const SignUp = () => {
  return (
    <div>
      <NavBar />
      <div className="mainContainer">
        <div className="secureHeading">
          <div className="name">
            <span className="firstLetter">S</span>ign Up
          </div>
          

        </div>
        <div className="form">
            <label for="name">Name : </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Siddhant"
              autocomplete="on"
              required
            />
            <label for="email">Email ID : </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="xyz@gmail.com"
              autocomplete="on"
              required
            />
            <label for="password">Password : </label>
            <input type="password" name="password" id="password" required />
            <label for="passwordConfirm">Confirm Password : </label>
            <input
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
              required
            />
            <button class="signupBtn1">Sign Up</button>
          </div>

        
      </div>
    </div>
  );
};

export default SignUp;
