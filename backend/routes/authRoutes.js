import express from "express";
import crypto from "crypto";
import { User } from "../models/userModel.js";
import multer from "multer";


import {
	login,
	signup,
	logout,
	isLoggedIn,
	removeSensor,
	updatePassword,
	protect,
	updateMe
} from "../controllers/authController.js";




const router = express.Router();
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/isLoggedIn",isLoggedIn);
router.patch("/updatePassword", protect, updatePassword);
router.patch("/updateMe", protect, updateMe);
router.post("/removeSensor", removeSensor);


export default router;
