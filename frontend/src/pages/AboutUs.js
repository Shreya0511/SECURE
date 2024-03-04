import React from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <>
    <div style ={{boxSizing: "border-box"}}>
      <NavBar/>
      <div className="mainContainer">
        <div className="secureHeading">
          <div className="name" style ={{marginTop : "2.5rem"}}>
            {/* <span className="firstLetter">S</span> */}
            About Us.
          </div>
        </div>
      </div>
    </div>
    <div style ={{marginTop : "29.5rem", backgroundColor : "black", color : "white", display : "flex",justifyContent: "center", alignItems: "center", padding : "1.5rem", fontSize : "1.5rem", flexDirection: "column", width : "100vw", overflowX : "hidden"}}>
        <div>Welcome to </div>
        <div style ={{fontWeight: "bold"}}><span className = "firstLetter">S</span>ECURE : <span className='firstLetter'>S</span>mart Energy Consumption and Over-Usage Detection System with Real-Time Alerts</div>
      </div>
    <div style ={{ backgroundColor : "black", color : "white", height : "20rem", display : "flex", padding : "1rem", width : "100vw",  overflowX : "hidden"}}>
      <div style ={{display : "flex", justifyContent: "center", alignItems: "center", flex : "1"}}>
         <img style ={{heights : "12rem",width : "18rem", margin : "auto", display : "flex", justifyContent: "center", alignContent: "center"}}src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCAb62TUC-uupeT0seRdDXbZMr3n6E2XwhEQCHKGbrZtHVvlCBTDE7Lgg8wiGkcxv6o6I&usqp=CAU"/>
        
      </div>
       <div style ={{margin : "auto", display : "flex", justifyContent: "center", alignItems: "center", flex : "2", padding : "2rem", color : "gray", fontSize : "1rem", fontWeight: "bold"}}>
        <p> Get control of your home on your fingertips, with <span className='firstLetter'>SECURE.</span> we believe in empowering homeowners with cutting-edge technology to safeguard their most precious asset - their home. With our interactive web application, you can revolutionize the way you monitor and manage your home's security, replacing outdated systems with seamless digital solutions.</p></div>
    </div>



    <div style ={{ backgroundColor : "black", width : "100vw", color : "white", height : "20rem", display : "flex", padding : "1rem", overflowX : "hidden"}}>
       <div style ={{margin : "auto", display : "flex", justifyContent: "center", alignItems: "center", flex : "2", padding : "2rem", color : "gray", fontSize : "1rem", fontWeight: "bold"}}>
        <p>
        You are not only enhancing the security of your home but also contributing to a greener future. Our energy-efficient approach helps conserve electricity, minimizing your environmental footprint and contributing to the sustainability of our planet.           </p></div>
      <div style ={{display : "flex", justifyContent: "center", alignItems: "center", flex : "1"}}>
         <img style ={{heights : "18rem", width : "20rem", margin : "auto", display : "flex", justifyContent: "center", alignContent: "center"}}src = "https://vigonotion.com/_astro/vigonotion_risograph_image_of_light_bulbs_hanging_in_a_dark_roo_6eaa7266-f3f7-4120-9a80-ae23ee629481@1390w.d09383d1.png"/>
    </div>
        
      </div>


    <div style ={{ backgroundColor : "black", width : "100vw", color : "white", height : "20rem", display : "flex", padding : "1rem", overflowX : "hidden"}}>
      <div style ={{display : "flex", justifyContent: "center", alignItems: "center", flex : "1"}}>
         <img style ={{heights : "18rem",width : "18rem", margin : "auto", display : "flex", justifyContent: "center", alignContent: "center"}}src = "https://quickelectricity.com/wp-content/uploads/2019/02/The-Importance-of-Conserving-Energy-Quick-Electricity-Blog.jpg"/>
        
      </div>
       <div style ={{margin : "auto", display : "flex", justifyContent: "center", alignItems: "center", flex : "2", padding : "2rem", color : "gray", fontSize : "1rem", fontWeight: "bold"}}>
        <p>
        With Secure, you're not just monitoring your home - you're gaining valuable insights. Our platform offers detailed previous data and predictive analytics, allowing you to track trends, anticipate potential issues, and make informed decisions about your home's security and energy management.           </p></div>
    </div>
    <div style ={{background : "black", color : "gray", display : "flex", justifyContent: "center", alignItems: "center", width : "100vw"}}>
    Welcome to a smarter, safer, and more sustainable way of protecting what matters the most.
    </div>
    <div style ={{background : "black", display : "flex", justifyContent: "center", alignItems: "center", color : 'rgb(222, 143, 83)', width : "100vw"}}>
     <Link to = "/home" style ={{textDecoration: "none", color : "rgb(222, 143, 83)"}}>@secure</Link>
    </div>
   </>
  )
}

export default AboutUs
