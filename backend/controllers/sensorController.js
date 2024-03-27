import { Sensor } from "../models/sensorModel";

export const addSensor = catchAsync(async (req, res, next) => {

    const newSensor = await Sensor.create({
      
    });

  res.status(201).json({
    status: "success"
  });
});
