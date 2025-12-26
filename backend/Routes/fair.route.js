import express from "express";
import { addFair, deleteFair, editFairById, getPrice, viewAllFair, viewFair } from "../Controllers/fair/fair.min.js";
import { auth } from "../Middleware/auth.js";

const router = express.Router();

router.post("/add", auth, addFair);
router.post("/view/:id", auth, viewFair);
router.post("/viewAllFair/", auth, viewAllFair);
router.delete("/delete/:id", auth, deleteFair);
router.post("/edit/:id", auth, editFairById);
// router.post('/:from/:to', getPrice);
export default router;