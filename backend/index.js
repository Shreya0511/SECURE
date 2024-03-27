import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import authRoutes from "./routes/authRoutes.js";
import sensorRoutes from "./routes/sensorIRoutes.js";
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

app.use("/api/v1/users", authRoutes);
app.use("/api/v1/sensorI", sensorIRoutes);


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

