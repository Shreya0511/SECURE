import express from "express";
import crypto from "crypto";
import { User } from "../models/userModel.js";
import multer from "multer";

import {
	login,
	signup,
	logout
} from "../controllers/authController.js";



const router = express.Router();
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;
