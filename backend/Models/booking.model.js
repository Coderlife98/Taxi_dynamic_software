import mongoose, { Schema } from "mongoose";

const bookingSchema = new mongoose.Schema({
  fair_id: {
    type: Schema.Types.ObjectId,
    ref: 'Fair'
  },
  from: {
    type: Schema.Types.ObjectId,
    ref: 'Address'
  },
  to: {
    type: Schema.Types.ObjectId,
    ref: 'Address'
  },
  vehicle: {
    type: Schema.Types.ObjectId,
    ref: 'Vehicle'
  },
  status: {
    type: Boolean,
    default: false
  },
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'Customer'
  },
  driver: {
    type: Schema.Types.ObjectId,
    ref: 'Driver'
  },
  booking_start_date: {
    type: Date,
    required: true
  },
  booking_end_date: {
    type: Date,
    required: true
  },
  modify_price: {
    type: String,
    default: null
  },
}, { timestamps: true })

export const Booking = mongoose.model('Booking', bookingSchema)
