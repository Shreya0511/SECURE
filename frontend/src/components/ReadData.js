// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Chart } from 'chart.js/auto';
// import moment from 'moment'; // Ensure moment.js is installed
// import LineChart from './LineChart';
// const API_URL = 'https://api.thingspeak.com/channels/2349053/feeds.json'; // Replace with your API endpoint
// const API_KEY = '0H5Z4Y2DMQCL7ULK'; // Replace with your API key
// const RESULTS = 2; // Number of data points to fetch
// const UserData = [
//   {
//     id: 0,
//     time: 0,
//     voltage:100
//   },
//   {
//     id: 1,
//     time: 5,
//     voltage:200
//   },
//   {
//     id: 2,
//     time: 10,
//     voltage:150
//   },
//   {
//     id: 3,
//     time: 15,
//     voltage:300
//   },
//   {
//     id: 4,
//     time: 20,
//     voltage:10
//   },
// ];
// const ReadData = () => {
//   const fetchData=async()=>{
//     const response = await axios.get(`${API_URL}?api_key=${API_KEY}&results=${RESULTS}`)
//     console.log(response.data.feeds[0]);
//   }
//   fetchData();
//   const [userData,setuserData]=useState({
//     labels:UserData.map((data)=>data.time),
//     datasets:[{
//       label:"Voltage",
//       data:UserData.map((data)=>data.voltage),
//       borderColor:"black",
//       borderWidth:2

//     }]
//   });
//   return(
//     <div style={{width:700}}><LineChart chartData={userData}/></div>
//   )
// };

// export default ReadData;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart } from 'chart.js/auto';
import moment from 'moment'; // Ensure moment.js is installed
import LineChart from './LineChart';

const API_URL = 'https://api.thingspeak.com/channels/2349053/feeds.json';
const API_KEY = '0H5Z4Y2DMQCL7ULK'; // Replace with your API key
const RESULTS = 2; // Number of data points to fetch

const ReadData = () => {
  const [userData, setUserData] = useState({
    labels: [],
    datasets: [{
      label: "Voltage",
      data: [],
      borderColor: "black",
      borderWidth: 2,
    }],
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${API_URL}?api_key=${API_KEY}&results=${RESULTS}`);
      const fetchedData = response.data.feeds[0];

      setUserData((prevData) => ({
        labels: [...prevData.labels, moment(fetchedData.created_at).add(prevData.labels.length * 5, 'seconds').format('HH:mm:ss')],
        datasets: [{
          ...prevData.datasets[0],
          data: [...prevData.datasets[0].data, fetchedData.field1],
        }],
      }));
    };

    const intervalId = setInterval(fetchData, 1000); // Fetch data every 5 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);
  
  return (
    <div style={{ width: 700 }}>
      <LineChart chartData={userData} />
    </div>
  );
};

export default ReadData;
