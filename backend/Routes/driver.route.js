import express from "express";
import { addDriver, deleteDriver, editDriver, updateDriver } from "../Controllers/driver/driver.min.js";

const router = express.Router();


router.post("/addDriver", addDriver);
router.delete("/deleteDriver/:id", deleteDriver);
router.post("/updateDriver/:id", updateDriver);
router.post("/editDriver/:id", editDriver);


export default router;