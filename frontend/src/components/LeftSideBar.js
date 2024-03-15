import React from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { Link } from "react-router-dom";
import "../styles/LeftSideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableColumns,
  faChartPie,
  faClipboard,
  faChartSimple,
  faBell,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const LeftSideBar = () => {
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
              window.location.pathname === "/analysis"
                ? "activeEle"
                : "inactiveEle"
            }
          >
            <Link to="/analysis" className="navigationLink">
              <FontAwesomeIcon icon={faChartSimple} />
              <span className="navitem">Analysis</span>
            </Link>
          </li>
          <li
            className={
              window.location.pathname === "/notifications"
                ? "activeEle"
                : "inactiveEle"
            }
          >
            <Link to="/notifications" className="navigationLink">
              <FontAwesomeIcon icon={faBell} />
              <span className="navitem">Notifications</span>
            </Link>
          </li>
          <li className="inactiveEle">
            <Link to="/notifications" className="navigationLink">
              <FontAwesomeIcon icon={faRightFromBracket} />
              <span className="navitem">Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSideBar;
