import React from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import {AuthData} from '../services/AuthService';
import NavBarProfile from '../components/NavBarProfile';

const ContactUs = () => {
  const {user} = AuthData();
  return (
    <>
    <div style ={{boxSizing: "border-box"}}>
    {user.isAuthenticated ? <NavBarProfile/> : <NavBar/>}
      <div className="mainContainer">
        <div className="secureHeading">
          <div className="name" style ={{marginTop : "2.5rem"}}>
            <span className="firstLetter">C</span>
            ontact Us.
          </div>
        </div>
      </div>
    </div>

    <div style ={{ marginTop : "70vh",backgroundColor : "black", color : "white", display : "flex", padding : "1rem", width : "100vw",  overflowX : "hidden", flexDirection: "column"}}>

      <div style ={{display : "flex", justifyContent: "center", alignItems: "center", fontSize : "4rem", marginBottom : "1.5rem"}}>Get In Touch!!</div>
      <div style ={{display : "flex", justifyContent: "center", alignItems: "center"}}><div style ={{}}><input style ={{width : "30rem", textDecoration: "none", height : "3rem", padding : "1rem"}} type = "textarea" placeholder='Enter Your Message!!'/></div><div style ={{backgroundColor : "rgb(222, 143, 83)", height : "3rem", width : "5rem", display : "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold"}}>Send</div></div>
      <div style ={{display: "flex", justifyContent: "center", alignItems: "center", color : "gray", marginTop : "3rem", flexDirection: "column", marginBottom  : "3rem", fontSize : "1.2rem"}}><div>We will make every effort to contact you as soon as possible. Please ensure to check your registered email for any further updates.</div>
        <div>You can also reach us using the following contact details.</div>
      </div>




      <div style ={{display : "flex", justifyContent: "space-evenly"}}>
        <div style ={{display : "flex", flexDirection : "column"}}>
          <div className = "firstLetter" style ={{display : "flex", alignItems: "center", justifyContent: "center", fontWeight : "bold", fontSize : "1.2rem"}}>Location:</div>
          <div style ={{color : "gray", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}><div>PDPM IIITDM </div><div>Jabalpur, madhya Pradesh</div></div>
        </div>


        <div style ={{display : "flex", flexDirection : "column"}}>
          <div className = "firstLetter" style ={{display : "flex", alignItems: "center", justifyContent: "center", fontWeight : "bold", fontSize : "1.2rem"}}>Contact Us:</div>
          <div style ={{color : "gray", display: "flex", flexDirection : "column", alignItems: "center", justifyContent: "center", }}><div>secure@gmail.com</div><div>+91-XXX-XXX-XXX</div></div>
          <div style ={{background : "black", display : "flex", justifyContent: "center", alignItems: "center", color : 'rgb(222, 143, 83)'}}>
     <Link to = "/home" style ={{textDecoration: "none", color : "rgb(222, 143, 83)", marginBottom : "0.2rem", marginTop: "1rem"}}>@secure</Link>
    </div>
        </div>  


        <div style ={{display : "flex", flexDirection : "column"}}>
          <div className = "firstLetter" style ={{display : "flex", alignItems: "center", justifyContent: "center", fontWeight : "bold", fontSize : "1.2rem"}}>Follow Us: </div>
          <div style ={{color : "gray", display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "center"}}><div>@twitter</div><div>@instagram</div></div>
        </div> 
        
             </div>
    </div>


    {/* <div style ={{background : "black", display : "flex", justifyContent: "center", alignItems: "center", color : 'rgb(222, 143, 83)', width : "100vw"}}>
     <Link to = "/home" style ={{textDecoration: "none", color : "rgb(222, 143, 83)", marginBottom : "0.2rem"}}>@secure</Link>
    </div> */}
   </>
  )
}

export default ContactUs
