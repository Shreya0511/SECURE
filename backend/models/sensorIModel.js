const sensorISchema = new mongoose.Schema(
    {
      manufacturer: {
        type: String,
        required: [true, "Please provide the manufacturer of Sensor-I"],
      },
      model: {
        type: String,
        required: [true, "Please provide the model of Sensor-I"],
      },
      parameter: {
        type: String,
        required: [true, "Please specify the parameter of Sensor-I"],
      },
      threshold: {
        type: Number,
        required: [true, "Please specify the threshold of Sensor-I"],
        min: [0, "Threshold must be a non-negative number"],
      },
      status: {
        type: Boolean,
        required: [true, "Please specify the status of Sensor-I"],
        default: false,
      },
      currentSupply: {
        type: Number,
        required: [true, "Please specify the current supply of Sensor-I"],
        min: [0, "Current supply must be a non-negative number"],
      },
      voltageSupply: {
        type: Number,
        required: [true, "Please specify the voltage supply of Sensor-I"],
        min: [0, "Voltage supply must be a non-negative number"],
      },
      powerConsumption: {
        type: Number,
        required: [true, "Please specify the power consumption of Sensor-I"],
        min: [0, "Power consumption must be a non-negative number"],
      },
      data: [
        {
          timestamp: {
            type: Number,
            required: [true, "Please specify the timestamp"],
          },
          energyConsumed: {
            type: Number,
            required: [true, "Please specify the energy consumed"],
          },
        },
      ],
    },
    {
      timestamps: true,
    }
  );
  
  export const SensorI = mongoose.model("SensorI", sensorISchema);
  