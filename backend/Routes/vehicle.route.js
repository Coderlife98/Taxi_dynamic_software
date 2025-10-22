import express from "express";
import { addVehicle, deleteVehicleById, editVehicleById, viewVehicles } from "../Controllers/vehicle/vehicle.min.js";
const router = express.Router();

router.post("/addVehicle", addVehicle);
router.post("/edit/:id", editVehicleById);
router.post("/view", viewVehicles);
router.delete("/deleteVehicle/:id", deleteVehicleById);
// router.post("/updateVehicle/:id", updateVehicle);



export default router;