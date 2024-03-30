import { Sensor } from "../models/sensorModel.js";
import catchAsync from "../Utils/catchAsync.js";
import { User } from "../models/userModel.js";

export const addSensor = catchAsync(async (req, res, next) => {

    const newSensor = await Sensor.create({
      sensorId : req.body.sensorId,
      manufacturer : req.body.manufacturer,
      model : req.body.model,
      parameter : req.body.parameter,
      threshold : req.body.threshold
    });

  
    req.sensor = newSensor;
    res.locals.sensor = newSensor;
    next();
});


export const getSensor = catchAsync(async (req, res, next) => {
  const userId = req.body.userId;
  const sensors = await Sensor.find();
  // console.log(sensors);
  res.status(200).json({
    status : "success",
    sensors : sensors
  })
});

export const addUserSensor = catchAsync(async (req, res, next) => {
  try{
  const userId = req.body.userId;
  const currUser = await User.findOne({ _id: userId });

  if (!currUser) {
    res.status(401).json({
      status: "fail",
      message: "We are unable to find the user!! Please login again.",
    });
  }
;

  currUser.sensors.push(req.sensor._id);
  await currUser.save();

  res.status(200).json({
    status : "success",
    data : currUser
  });
  
} catch(err){
  return res.status(500).json({
      status: "error",
      message: "An error occurred while adding sensor to user.",
    });
}
}

)


