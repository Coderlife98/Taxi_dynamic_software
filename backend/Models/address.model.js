import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  address: {
    type: String,
    require: true
  },
  pinCode: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    default: false
  },
}, { timestamps: true })

export const Address = mongoose.model('Address', addressSchema)