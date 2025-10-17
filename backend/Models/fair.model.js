import mongoose, { Schema } from "mongoose";

const fairSchema = new mongoose.Schema({
  price: {
    type: String,
    required: true
  },
  to: {
    type: Schema.Types.ObjectId,
    ref: "Address"
  },
  vehicle: {
    type: Schema.Types.ObjectId,
    ref: "Vehicle"
  },
  from: {
    type: Schema.Types.ObjectId,
    ref: "Address"
  }
})

export const Fair = mongoose.model('Fair', fairSchema);