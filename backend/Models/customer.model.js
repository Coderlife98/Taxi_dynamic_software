import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true
  },
  mobile_no: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    default: false
  }

}, { timestamps: true })

export const Customer = mongoose.model('Customer', customerSchema);