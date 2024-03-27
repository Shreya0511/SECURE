const sensorSchema = new mongoose.Schema(
  {
    sensorId: {
      type: String,
      required: true,
      unique: true,
    },
    manufacturer: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
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
    },
    voltageSupply: {
      type: Number,
      required: true,
    },
    powerConsumption: {
      type: Number,
      required: true,
    },
    data: [
      {
        timestamp: {
          type: Number,
          required: true,
        },
        energyConsumed: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Sensor = mongoose.model("Sensor", sensorSchema);
