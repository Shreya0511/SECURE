import express from "express";
import crypto from "crypto";
import multer from "multer";

import { addSensor, getSensor } from "../controllers/sensorController.js";

const router = express.Router();

router.post("/addSensor", addSensor);
router.get("/getSensors", getSensor);



export default router;
