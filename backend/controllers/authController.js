import crypto from "crypto";
import jsonwebtoken from "jsonwebtoken";
const { sign, decode, verify } = jsonwebtoken;
import { promisify } from "util";
import { User } from "../models/userModel.js";
import catchAsync from "../Utils/catchAsync.js";
import dotenv from "dotenv";
dotenv.config();

const signToken = (id) => {
    // console.log(process.env.NODE_ENV);
    return sign({ id }, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });
  };

  const createSendToken = (user, statusCode, res) => {
    const token = signToken(user._id);
    const cookieOptions = {
      expiresIn: new Date(Date.now() + "2d" * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    if (process.env.NODE_ENV === "production") cookieOptions.secure = true;
  
    res.cookie("jwt", token, cookieOptions);
  
    // Remove password from output
    user.password = undefined;
  
    res.status(statusCode).json({
      status: "success",
      token,
      data: {
        user,
      },
    });
  };

export const signup = catchAsync(async (req, res, next) => {

    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm
    });

  res.status(201).json({
    status: "success"
  });
});




export const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // 1) Check if email and password exist
  if (!email || !password) {
    return next(new AppError("Please provide email and password!", 400));
  }

  // 2) Check if user exists && password is correct
  let user = await User.findOne({ email }).select("+password");
  if (!user) {
    user = await User.findOne({ username: email }).select("+password");
  }

  if (!user || user.password != password) {
    return next(new AppError("Incorrect email or password", 401));
  }


  // 3) If everything ok, send token to client
  createSendToken(user, 200, res);
});


export const logout = (req, res) => {
  res.cookie("jwt", "loggedout", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.status(200).json({ status: "success" });
};



export const protect = catchAsync(async (req, res, next) => {
  // 1) Getting token and check of it's there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.body.jwt) {
    token = req.body.jwt;
  }

  if (!token) {
    res.status(401).json({
      status: "fail",
      message: "You are not logged in! Please log in to get access",
    });
  }

  // 2) Verification token
  const decoded = verify(token, "i-am-shreya");


  // 3) Check if user still exists
  let currentUser = await User.findById(decoded.id);

  if (!currentUser) {
    res.status(401).json({
      status: "fail",
      message: "We are unable to find the user!! Please login again.",
    });
  }

  // 4) Check if user changed password after the token was issued
  if (currentUser.changedPasswordAfterToken(decoded.iat)) {
    res.status(401).json({
      status: "fail",
      message: "User recently changed password! Please login again",
    });
  }

  // GRANT ACCESS TO PROTECTED ROUTE
  req.user = currentUser;
  res.locals.user = currentUser;
  // res.status(200).json({
  //   status: 'success',
  // });
  next();
});

