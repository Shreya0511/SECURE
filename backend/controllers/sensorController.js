import { Sensor } from "../models/sensorModel.js";
import catchAsync from "../Utils/catchAsync.js";
import { User } from "../models/userModel.js";



const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) {
      newObj[el] = obj[el];
    }
  });
  return newObj;
};

export const addSensor = catchAsync(async (req, res, next) => {
  const newSensor = await Sensor.create({
    sensorId: req.body.sensorId,
    manufacturer: req.body.manufacturer,
    model: req.body.model,
    parameter: req.body.parameter,
    threshold: req.body.threshold,
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
    status: "success",
    sensors: sensors,
  });
});


export const addUserSensor = catchAsync(async (req, res, next) => {
  try {
    const userId = req.body.userId;
    const currUser = await User.findOne({ _id: userId });

    if (!currUser) {
      res.status(401).json({
        status: "fail",
        message: "We are unable to find the user!! Please login again.",
      });
    }
    currUser.sensors.push(req.sensor._id);
    await currUser.save();

    res.status(200).json({
      status: "success",
      data: currUser,
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: "An error occurred while adding sensor to user.",
    });
  }
});

export const editSensor = catchAsync(async(req, res, next) => {
  const filteredBody = filterObj(
    req.body,
    "sensorId",
    "manufacturer",
    "model",
    "threshold",
    "parameter",
    "status"
  );
  console.log(req.body);

  //3. Update User document.
  const updatedSensor = await Sensor.findByIdAndUpdate(req.body._id, filteredBody, {
    new: true,
    runValidators: true,
  });
  
  let currentUser = await User.findOne({_id : req.body.userId.toString()});

  if (!currentUser) {
    res.status(401).json({
      status: "fail",
      message: "We are unable to find the user!! Please login again.",
    });
  }

  // 4) Check if user changed password after the token was issued

  const populatedSensors = await Sensor.find({ _id: { $in: currentUser.sensors } });

  currentUser.sensors = populatedSensors;


  res.status(200).json({
    status: "success",
    data: {
      data : currentUser
    },
  });

  
})
