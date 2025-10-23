import express from "express";
import { addAddress, deleteAddress, editAddress, viewAddress } from "../Controllers/address/address.min.js";

const router = express.Router();

router.post("/add", addAddress);
router.delete("/delete/:id", deleteAddress);
router.post("/edit/:id", editAddress);
router.post("/view/:id", viewAddress);

export default router;