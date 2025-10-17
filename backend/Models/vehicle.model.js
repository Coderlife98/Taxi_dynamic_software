import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  brand: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  seat_no: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    default: false
  }
})

export const Vehicle = mongoose.model('Vehicle', vehicleSchema);