import express from "express";
import { addVehicle, ById, deleteVehicleById, editVehicleById, vehicleList } from "../Controllers/vehicle/vehicle.min.js";
import { auth } from "../Middleware/auth.js";
const router = express.Router();

router.post("/addVehicle", auth, addVehicle);
router.post("/edit/:id", auth, editVehicleById);
// router.post("/view", auth, viewVehicles);
router.post("/view/:id", auth, ById);
router.delete("/vehicle/delete/:id", auth, deleteVehicleById);
router.post('/vehicleList', vehicleList);



export default router;