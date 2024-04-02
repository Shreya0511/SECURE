import React from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { Link } from "react-router-dom";
import "../styles/LeftSideBar.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faRightFromBracket,
  faPenToSquare,
  faUser,
  faUnlock,
} from "@fortawesome/free-solid-svg-icons";
import { AuthData } from "../services/AuthService";

const LeftSideBar = () => {
  const navigate = useNavigate();
  const { logout, user, setUser } = AuthData();

  const handleLogout = () => {
    navigate("/home");
    logout();
  };

  useEffect(() => {}, [handleLogout]);
  return (
    <div className="SideBarContainer">
      <div className="linkContainer">
        <ul className="navigationLinks">
          <li
            className={
              window.location.pathname === "/dashboard"
                ? "activeEle"
                : "inactiveEle"
            }
          >
            <Link to="/dashboard" className="navigationLink">
              <FontAwesomeIcon icon={faChartPie} />
              <span className="navitem">Dashboard</span>
            </Link>
          </li>
          <li
            className={
              window.location.pathname === "/dashboard/me"
                ? "activeEle"
                : "inactiveEle"
            }
          >
            <Link to="/dashboard/me" className="navigationLink">
              <FontAwesomeIcon icon={faUser} />{" "}
              <span className="navitem">Profile</span>
            </Link>
          </li>
          <li
            className={
              window.location.pathname === "/dashboard/editDetails"
                ? "activeEle"
                : "inactiveEle"
            }
          >
            <Link to="/dashboard/editDetails" className="navigationLink">
              <FontAwesomeIcon icon={faPenToSquare} />
              <span className="navitem">Edit Details</span>
            </Link>
          </li>
          <li
            className={
              window.location.pathname === "/dashboard/changePw"
                ? "activeEle"
                : "inactiveEle"
            }
          >
            <Link to="/dashboard/changePw" className="navigationLink">
              <FontAwesomeIcon icon={faUnlock} />{" "}
              <span className="navitem">Security</span>
            </Link>
          </li>
          <li className="inactiveEle">
            <Link to="" className="navigationLink">
              <FontAwesomeIcon icon={faRightFromBracket} />
              <span className="navitem" onClick={handleLogout}>
                Logout
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSideBar;
