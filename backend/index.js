import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import authRoutes from "./routes/authRoutes.js";
import sensorRoutes from "./routes/sensorRoutes.js";
import fetchDataFromAPI from "./fetchData.js";

dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/public", express.static("public"));
app.options("*", cors());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");


const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1/user", authRoutes);
app.use("/api/v1/sensor", sensorRoutes);


const CONNECTION_URL = "mongodb+srv://singhshreya0511:secure@cluster0.urasnuy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const PORT = process.env.PORT || 8000;

mongoose
	.connect(CONNECTION_URL)
	.then(() => console.log("Successfully Connected to Database!!"))
	.catch((error) => {
		console.log(error.message);
	});

const server = app.listen(PORT, () => {
	console.log(`Server is Running on Port : ${PORT}`);
});
let time = 5;

// API endpoint in your controller
app.post("/api/updateGlobal", (req, res) => {
    // Assuming the value is sent in the request body
    const { value } = req.body;
    
    // Update the global variable
    time = value;
	console.log(time);

    res.send("Global variable updated successfully");
});

// const fetchInterval = setInterval(() => {
// 	// Call the function with the sensor ID (you may replace 'sensorId' with your actual sensor ID)
// 	fetchDataFromAPI('6630e615c19278f19471895b',time);
//   }, 20000); // Fetch data every 10 seconds

