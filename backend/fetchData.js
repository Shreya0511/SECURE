import axios from "axios";
import moment from "moment";
import { Sensor } from "./models/sensorModel.js"; 
// const API_URL = "https://api.thingspeak.com/channels/2349053/feeds.json";
const API_URL = " https://api.thingspeak.com/channels/2531546/feeds.json";

const API_KEY = "5A1RDL7ABO68191I"; 

const fetchDataFromAPI = async (sensorId,time) => {
  console.log(sensorId,time)
  try {

    const points=(time*60/15);
    const response = await axios.get(`${API_URL}?api_key=${API_KEY}&results=${points}`);
    const fetchedData = response.data.feeds;

    const total = fetchedData.reduce((acc, feed) => acc + parseFloat(feed.field1), 0); 
    const average=total/points;
    const processedData = [];
    processedData.push({
      x: moment().valueOf(), 
      y: average.toFixed(2),
      originalY: total,
    });

    console.log(points,total,average);
    
    // for (let i = 0; i <= fetchedData.length - 10; i += 10) {
    //   const segment = fetchedData.slice(i, i + 10);
    //   console.log(segment);

    //   const lastPoint=segment[segment.length-1].field1;
    //   console.log(lastPoint);
    //   const cumulativeEnergy = segment.reduce((sum, dataPoint) => sum + parseFloat(dataPoint.field1), 0);
    //   const averageCumulativeEnergy = cumulativeEnergy/10 + Math.random();
      
      
    //   processedData.push({
    //     x: moment().valueOf(), 
    //     y: averageCumulativeEnergy.toFixed(2),
    //     originalY: cumulativeEnergy,
    //   });
    // }

    // console.log(fetchedData);
    // const sensor = await Sensor.findById(sensorId);
    // if (sensor) {
      
    //   console.log("Sensor found with ID:", sensorId);
    //   sensor.data.push(...processedData);
    //   await sensor.save(); 
    //   console.log("Data stored in the database:", processedData);
    // } else {
    //   console.error("Sensor not found with ID:", sensorId);
    // }
  } catch (error) {
    console.error("Error fetching or storing data:", error);
  }
};

export default fetchDataFromAPI;
