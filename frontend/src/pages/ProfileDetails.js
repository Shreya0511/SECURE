import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { AuthData } from '../services/AuthService';


const ProfileDetails = () => {
    const {user} = AuthData();
    console.log(user);
  return (
    <div style = {{marginTop : "4rem"}}>
        <div style ={{color : "rgb(222, 143, 83)", fontWeight: "bold", fontSize : "1.7rem"}}>
          User Details : 
        </div>
        <div style ={{display : "flex", flexDirection : "row", marginTop : "2rem"}}>
            <div style ={{height : "17rem", width : "17rem", backgroundColor : "#6a645ebf", display : "flex", borderRadius : "1rem"}}>
            <Col xs={6} md={4}>
          <Image style ={{height : "12rem", width : "12rem", marginTop : "2rem", marginLeft : "2.2rem"}} src={JSON.parse(user.user).image} roundedCircle />
        </Col>
            </div>
            <div style ={{height : '17rem', width : "30rem", color : "white", backgroundColor : "#6a645ebf",marginLeft : "2rem", borderRadius : "1rem", padding : "2rem"}}>
               <div style ={{display : "flex", flexDirection: "column", fontSize : "1.3rem"}}>
                <div style ={{display : "flex", flexDirection: "column"}}><div style ={{fontWeight: "bold", width : "8rem"}}>Name : </div><div style ={{color : "#a19b9b"}}>{JSON.parse(user.user).name}</div></div>
                <div style ={{border : "0.08rem solid #6a645ebf", marginBottom : "0.5rem"}}></div>
                <div style ={{display : "flex", flexDirection: "column"}}><div style ={{fontWeight: "bold", width : "8rem"}}>Email : </div><div style ={{color : "#a19b9b"}}>{JSON.parse(user.user).email}</div></div>
                <div style ={{border : "0.08rem solid #6a645ebf", marginBottom : "0.5rem"}}></div>

                <div style ={{display : "flex", flexDirection: "column"}}><div style ={{fontWeight: "bold", width : "8rem"}}>Password :</div><div style ={{color : "#a19b9b"}}>{JSON.parse(user.user).passwordConfirm}</div></div>
                <div style ={{border : "0.08rem solid #6a645ebf", marginBottom : "0.5rem"}}></div>

               </div>
            </div>
        </div>
      
    </div>
  )
}

export default ProfileDetails
