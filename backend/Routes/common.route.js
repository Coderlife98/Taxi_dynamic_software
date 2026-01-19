import express from "express";
import { auth } from "../Middleware/auth.js";
import { UpdateById } from "../Controllers/fair/fair.min.js";
const router = express.Router();


router.put('/updateById/:id', UpdateById);
export default router;