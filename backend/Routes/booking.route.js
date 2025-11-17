import express from "express";
import { addBooking, deleteBooking, updateBooking, viewAllBooking, viewBooking } from "../Controllers/booking/booking.min.js";
import { auth } from "../Middleware/auth.js";
const router = express.Router();

router.post("/add", auth, addBooking);
router.delete("/delete/:id", auth, deleteBooking);
router.post("/update/:id", auth, updateBooking);
router.post("/view/:id", auth, viewBooking);
router.post("/viewAllBooking", auth, viewAllBooking);

export default router;