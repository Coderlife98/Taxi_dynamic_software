import express from "express";
import { addDriver, deleteDriver, editDriver, viewDriver } from "../Controllers/driver/driver.min.js";
import { auth } from "../Middleware/auth.js";

const router = express.Router();


router.post("/add", auth, addDriver);
router.delete("/delete/:id", auth, deleteDriver);
router.post("/view/:id", auth, viewDriver);
router.post("/edit/:id", auth, editDriver);


export default router;