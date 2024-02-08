import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/Navbar.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" className = "navbar_main_container">
        <Container className = "navbar_container">
         <div className = "navbarSecure">
           <span className = "firstLetter">S</span>ECURE
         </div>
         <div className = "navbarMenu">
            <a className = {window.location.pathname === "/" ? "activet" : "inactivet"} href = "/" style ={{textDecoration:"none"}}>
            Home
            </a>
            <a className = {window.location.pathname === "/aboutUs" ? "activet" : "inactivet"} href = "/aboutUs" style = {{textDecoration: "none"}}>
            About Us
            </a>
            <a className = {window.location.pathname === "/contactUs" ? "activet" : "inactivet"} href = "/contactUs" style = {{textDecoration: "none"}}>
            Contacts
            </a>
            <div className = "button">
            <a className = {window.location.pathname === "/signUp" ? "activeSignUp" : "inactiveSignUp"} href = "/signup" style = {{textDecoration: "none"}}>
                Sign Up
            </a>
            </div>



         </div>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
