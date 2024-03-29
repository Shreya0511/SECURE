import React from "react";
import NavBar from "../components/NavBar";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./../styles/SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleName = (event) =>{
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);  }

  const handlePasswordConf = (event) => {
    setPasswordConfirm(event.target.value);
  }

  const handleSubmit = async() => {
    try{
      const userDetails = {
        name : name,
        email : email,
        password : password,
        passwordConfirm : passwordConfirm
      }

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/v1/user/signup`,
        {
          method : "POST",
          headers: {
            "Content-Type": "application/json",
            // authorization: `Bearer ${getCookies("jwt")}`,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":
              "Origin, X-Requested-With, Content-Type, Accept, Z-Key",
            "Access-Control-Allow-Methods":
              "GET, HEAD, POST, PUT, DELETE,PATCH, OPTIONS",
          },
          body: JSON.stringify(userDetails),        }
        )
        .then((response) => response.json())
        .then((data) => {
           if(data.status === 'success'){
            alert(`Congratulations!! You are succesfully singed up with us. Please login to continue.`);
            navigate("/login");

           }
           else{
            alert("Please make sure to fill all the required fields!!");
           }
        });



    } catch(err){
      alert("Error Signing Up. Please Try again Later!!")
    }
  }


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
                onChange = {handleName}
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
                onChange={handleEmail}
              />
            </div>
          </div>
          <div className="field pwfield">
            <div className="label pwlabel">
              <label for="password">Password : </label>
            </div>
            <div className="forminput">
              <input type="password" name="password" id="password" required placeholder="********"
              onChange = {handlePassword}
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
                onChange={handlePasswordConf}
              />
            </div>
          </div>

          <div className="loginLink">
            Already have an account ? <Link to="/login" style ={{textDecoration: "none", marginLeft : "0.5rem", color : "rgb(222, 143, 83)", fontWeight: "bold"}}>Login</Link>
          </div>
          <div className="btnfield">
            <button class="signupBtn1" onClick= {handleSubmit}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
