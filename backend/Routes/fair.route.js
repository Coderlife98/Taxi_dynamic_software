import express from "express";
import { addFair, deleteFair, editFairById, viewAllFair, viewFair } from "../Controllers/fair/fair.min.js";

const router = express.Router();

router.post("/add", addFair);
router.post("/view/:id", viewFair);
router.post("/viewAllFair/", viewAllFair);
router.delete("/delete/:id", deleteFair);
router.post("/edit/:id", editFairById);

export default router;