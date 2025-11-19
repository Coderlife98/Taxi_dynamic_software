import express from "express";
import { logout, userLogin } from "../Controllers/user/user.min.js";
import { auth } from "../Middleware/auth.js";
const router = express.Router();

router.post("/login", userLogin);
router.post("/logout", logout);



router.get("/check-auth", auth, (req, res) => {
  res.json({ message: "Authenticated", success: true, userId: req.userId });
});

export default router;