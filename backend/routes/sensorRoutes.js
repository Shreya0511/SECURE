import express from "express";
import crypto from "crypto";
import multer from "multer";

import { addSensor, addSensorData, addUserSensor, editSensor, getSensor } from "../controllers/sensorController.js";
import { removeSensor } from "../controllers/authController.js";

const router = express.Router();

router.post("/addSensor", addSensor, addUserSensor);
router.get("/getSensors", getSensor);
router.patch("/editSensor", editSensor);
router.patch("/addSensorData", addSensorData);



export default router;
