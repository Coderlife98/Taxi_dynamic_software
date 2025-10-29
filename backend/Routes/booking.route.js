import express from "express";
import { addCustomer } from "../Controllers/customer/customer.min.js";
import { deleteBooking, updateBooking, viewAllBooking } from "../Controllers/booking/booking.min.js";
const router = express.Router();

router.post("add", addCustomer);
router.delete("delete", deleteBooking);
router.post("update", updateBooking);
router.post("view", viewAllBooking);
router.post("viewAllBooking", viewAllBooking);

export default router;