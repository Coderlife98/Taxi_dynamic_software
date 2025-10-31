import express from "express";
import { addBooking, deleteBooking, updateBooking, viewAllBooking, viewBooking } from "../Controllers/booking/booking.min.js";
const router = express.Router();

router.post("/add", addBooking);
router.delete("/delete", deleteBooking);
router.post("/update", updateBooking);
router.post("/view/:id", viewBooking);
router.post("/viewAllBooking", viewAllBooking);

export default router;