import express from "express";
import { addDriver, deleteDriver, driverList, editDriver, updateDriverById, viewDriver } from "../Controllers/driver/driver.min.js";
import { auth } from "../Middleware/auth.js";

const router = express.Router();


router.post("/add", auth, addDriver);
router.delete("/delete/:id", auth, deleteDriver);
router.post("/view/:id", auth, viewDriver);
router.post("/edit/:id", auth, editDriver);
router.post('/driverlist', driverList);
router.post('/updateDriverById/:id', auth, updateDriverById);


export default router;