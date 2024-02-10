import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import "./../styles/SignUp.css";

const SignUp = () => {
  return (
    <div>
      <NavBar />
      <div className="maincontainer">
        <div className="form">
          <div className="secureheading">
            <div className="heading">
              <span className="firstLetter">S</span>ign Up
            </div>
          </div>

          <div className="field namefield">
            <div className="label namelabel">
              <label for="name">Name : </label>
            </div>
            <div className="forminput">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Siddhant"
                autocomplete="on"
                required
              />
            </div>
          </div>

          <div className="field emailfield">
            <div className="label emaillabel">
              <label for="email">Email ID : </label>
            </div>
            <div className="forminput">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="xyz@gmail.com"
                autocomplete="on"
                required
              />
            </div>
          </div>
          <div className="field pwfield">
            <div className="label pwlabel">
              <label for="password">Password : </label>
            </div>
            <div className="forminput">
              <input type="password" name="password" id="password" required placeholder="********"
 />
            </div>
          </div>

          <div className="field cnfpwfield">
            <div className="label cnfpwlabel">
              <label for="passwordConfirm">Confirm Password : </label>
            </div>
            <div className="forminput">
              <input
                type="password"
                name="passwordConfirm"
                id="passwordConfirm"
                placeholder="********"
                required
              />
            </div>
          </div>

          <div className="loginLink">
            Already have an account ? <Link to="/login" style ={{textDecoration: "none", marginLeft : "0.5rem", color : "rgb(222, 143, 83)", fontWeight: "bold"}}>Login</Link>
          </div>
          <div className="btnfield">
            <button class="signupBtn1">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
