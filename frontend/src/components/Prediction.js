import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import ApexChart from "apexcharts";
import Chart from "react-apexcharts";
import NavBarProfile from "./NavBarProfile";
import { useNavigate } from "react-router-dom";
import Threshold from "./Threshold";
import { AuthData } from "../services/AuthService";
import { useParams } from "react-router-dom";
import Time from "./Time";


const Prediction = () => {

    const parameter = useParams();
    const [energy,setEnergy]=useState(0);
    const [cost,setCost]=useState(0);
      useEffect(() => {
       fetchData();
      }, []);

      const fetchData = async () => {
        // console.log("Fetching data...");
        // const sensorData = JSON.parse(user.user).sensors.find(
        //   (sensor) => sensor._id === parameter.sensorId
        // );
        let Data = {
          id:parameter.sensorId,
        };
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/v1/sensor/predict`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(Data),
          }
        ).then((response) => response.json())
        const averageEnergy=response.data;
        setEnergy(averageEnergy);
        const daysInMonth = moment().daysInMonth(); // Get the number of days in the current month
        const cst = averageEnergy * daysInMonth * 24*8; // Energy * days in the current month * 24 hours
        setCost(cst);
        console.log(cst,averageEnergy)

      };


    return (
        <>
       <NavBarProfile id={parameter.sensorId} />
       <div style={{ textAlign: "center", marginTop: "20px" }}>
                <p style={{ fontSize: "1.2rem" }}>Your average per hour energy consumption in KwH is {energy}</p>
                <p style={{ fontSize: "1.2rem" }}>According to this, your estimated cost for the current month will be {cost.toFixed(3)} rupees</p>
            </div>
        </>
    )
    
}

export default Prediction