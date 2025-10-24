import express from "express";
import { addDriver, deleteDriver, editDriver, viewDriver } from "../Controllers/driver/driver.min.js";

const router = express.Router();


router.post("/add", addDriver);
router.delete("/delete/:id", deleteDriver);
router.post("/view/:id", viewDriver);
router.post("/edit/:id", editDriver);


export default router;