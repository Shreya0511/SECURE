import { Sensor } from "../models/sensorModel.js";
import catchAsync from "../Utils/catchAsync.js";

export const addSensor = catchAsync(async (req, res, next) => {

    const newSensor = await Sensor.create({
      sensorId : req.body.sensorId,
      manufacturer : req.body.manufacturer,
      model : req.body.model,
      parameter : req.body.parameter,
      threshold : req.body.threshold
    });
  res.status(201).json({
    status: "success"
  });
});

export const getSensor = catchAsync(async (req, res, next) => {
  const sensors = await Sensor.find();
  console.log(sensors);
  res.status(200).json({
    status : "success",
    sensors : sensors
  })
})


