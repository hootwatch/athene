import mongoose from "mongoose";

const vitalSchema = new mongoose.Schema({
  heartRate: { type: String, required: true },
  barometer: { type: String, required: true },
  time: { type: String, default: Date.now }
});

const Vital = mongoose.model("Vital", vitalSchema);

export default Vital;
