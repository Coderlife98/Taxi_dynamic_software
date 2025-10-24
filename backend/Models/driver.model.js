import mongoose, { Schema } from "mongoose";

const driverSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  mobile_no: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  licence_no: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    default: false
  },
  // customer: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Customer",
  //   default: null
  // }
})

export const Driver = mongoose.model('Driver', driverSchema)