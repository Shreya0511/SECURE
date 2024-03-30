import express from "express";
import crypto from "crypto";
import multer from "multer";

import { addSensor, addUserSensor, getSensor } from "../controllers/sensorController.js";
import { removeSensor } from "../controllers/authController.js";

const router = express.Router();

router.post("/addSensor", addSensor, addUserSensor);
router.get("/getSensors", getSensor);



export default router;
