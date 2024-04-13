import mongoose from "mongoose";


const sensorSchema = new mongoose.Schema(
  {
    sensorId: {
      type: String,
      required: true,
    },
    manufacturer: {
      type: String,
      required: true,
      lowercase : true,
    },
    model: {
      type: String,
      required: true,
      lowercase : true,
    },
    parameter: {
      type: String,
      required: true,
    },
    threshold: {
      type: Number,
      required: true,
      default: 0,
    },
    status: {
      type: Boolean,
      required: true,
      default: false,
    },
    currentSupply: {
      type: Number,
      required: true,
      default : 0,
    },
    voltageSupply: {
      type: Number,
      required: true,
      default : 0,
    },
    powerConsumption: {
      type: Number,
      required: true,
      default : 0,
    },
    data: [
      {
        x: {
          type: Number,
        },
        y: {
          type: Number,
        },
        originalY : {
          type : Number,
        }
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Sensor = mongoose.model("Sensor", sensorSchema);
