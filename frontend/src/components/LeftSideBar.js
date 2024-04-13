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
  faTableColumns,
  faChartPie,
  faClipboard,
  faChartSimple,
  faBell,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { AuthData } from "../services/AuthService";

const LeftSideBar = () => {
  const navigate = useNavigate();
  const { logout, user, setUser } = AuthData();

  const handleLogout = () => {
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
              <FontAwesomeIcon icon={faUser} />
              <span className="navitem">Profile</span>
            </Link>
          </li>
          <li
            className={
              window.location.pathname === "/activeSensors"
                ? "activeEle"
                : "inactiveEle"
            }
          >

            <Link to="/activeSensors" className="navigationLink">
              <FontAwesomeIcon icon={faClipboard} />
              <span className="navitem">Active Sensors</span>
            </Link>
          </li>
          <li
            className={
              window.location.pathname === "/history"
                ? "activeEle"
                : "inactiveEle"
            }
          >
            <Link to="/history" className="navigationLink">
              <FontAwesomeIcon icon={faChartSimple} />
              <span className="navitem">History</span>
            </Link>
          </li>
    
          <li className="inactiveEle" onClick={handleLogout}>
            <Link to="/home" className="navigationLink">
              <FontAwesomeIcon icon={faRightFromBracket} />
              <span className="navitem">
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
