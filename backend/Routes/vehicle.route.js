import express from "express";
import { addVehicle, deleteVehicleById, editVehicleById, vehicleList, viewVehicles } from "../Controllers/vehicle/vehicle.min.js";
import { auth } from "../Middleware/auth.js";
const router = express.Router();

router.post("/addVehicle", auth, addVehicle);
router.post("/edit/:id", auth, editVehicleById);
router.post("/view", auth, viewVehicles);
router.delete("/vehicle/delete/:id", auth, deleteVehicleById);
router.post('/vehicleList', vehicleList);



export default router;