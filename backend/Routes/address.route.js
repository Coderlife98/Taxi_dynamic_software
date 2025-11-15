import express from "express";
import { addAddress, deleteAddress, editAddress, viewAddress } from "../Controllers/address/address.min.js";
import { auth } from "../Middleware/auth.js";

const router = express.Router();

router.post("/add", auth, addAddress);
router.delete("/delete/:id", auth, deleteAddress);
router.post("/edit/:id", auth, editAddress);
router.post("/view/:id", auth, viewAddress);

export default router;