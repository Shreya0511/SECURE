import axios from "axios";
import moment from "moment";
import { Sensor } from "./models/sensorModel.js"; // Import your Sensor model

const API_URL = "https://api.thingspeak.com/channels/2349053/feeds.json";
const API_KEY = "0H5Z4Y2DMQCL7ULK"; // Replace with your API key

const fetchDataFromAPI = async (sensorId) => {
  try {
    const response = await axios.get(`${API_URL}?api_key=${API_KEY}&results=10`);
    const fetchedData = response.data.feeds;

    // Process the fetched data
    const processedData = [];

    for (let i = 0; i <= fetchedData.length - 10; i += 10) {
      const segment = fetchedData.slice(i, i + 10);

      // Calculate cumulative energy for the segment
      const cumulativeEnergy = segment.reduce((sum, dataPoint) => sum + parseFloat(dataPoint.field1), 0);
      const averageCumulativeEnergy = cumulativeEnergy/10 + Math.random() * 2 + 1;

      // Append the average cumulative energy to the processed data
      processedData.push({
        x: moment().valueOf(), 
        y: averageCumulativeEnergy.toFixed(2),
        originalY: cumulativeEnergy,
      });
    }

    // Store the processed data in the database
    const sensor = await Sensor.findById(sensorId);
    if (sensor) {
      // Append the processed data to the sensor's data array
      console.log("Sensor found with ID:", sensorId);
      sensor.data.push(...processedData);
      await sensor.save(); // Save the updated sensor document
      console.log("Data stored in the database:", processedData);
    } else {
      console.error("Sensor not found with ID:", sensorId);
    }
  } catch (error) {
    console.error("Error fetching or storing data:", error);
  }
};

export default fetchDataFromAPI;
