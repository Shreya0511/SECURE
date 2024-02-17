import React from "react";
import NavBar from "../components/NavBar";
import { Link ,useNavigate} from "react-router-dom";
import "./../styles/Login.css";
const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    // Perform login logic here (e.g., send a request to an authentication server)
    // Assuming successful login:
    navigate("/dashboard"); // Redirect to the dashboard route
  };
  return (
    <div>
      <NavBar />
      <div className="maincontainer">
        <div className="form">
          <div className="secureheading">
            <div className="heading">
              <span className="firstletter">L</span>ogin
            </div>
          </div>
          <div className=" field nameField">
          <div className="label labelName"><label for="name">
              Name :
            </label>
            </div>
            <div className = "forminput">
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
          <div className=" field emailField">
          <div className="label labelEmail">
            <label  for="email">
              Email ID :{" "}
            </label>
            </div>
            <div className = "forminput">
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

          <div className="field passwordField">
          <div className="label labelPw">
            <label for="password">
              Password :{" "}
            </label>
            </div>
            <div className="forminput"
>
            <input
              type="password"
              name="password"
              placeholder="*******"
              id="password"
              required
            />
            </div>
          </div>
          <div className="signupLink">
            Don't have an Account ? <Link to="/signup" style ={{textDecoration: "none", marginLeft : "0.5rem", color : "rgb(222, 143, 83)", fontWeight: "bold"}}>Sign Up</Link>
          </div>

          <div className="btnfield">
            <button class="signupBtn1" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
