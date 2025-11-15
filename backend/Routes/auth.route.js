import express from "express";
import { logout, userLogin } from "../Controllers/user/user.min.js";
const router = express.Router();

router.post("/login", userLogin);
router.post("/logout", logout);

export default router;