import express from "express"
import { addCustomer, deleteCustomer, editCustomer, viewAllCustomer, viewCustomerById } from "../Controllers/customer/customer.min.js";
import { auth } from "../Middleware/auth.js";

const router = express.Router();

router.post("/add", auth, addCustomer);
router.delete("/delete/:id", auth, deleteCustomer);
router.post("/view/:id", auth, viewCustomerById);
router.post("/viewAll", auth, viewAllCustomer)
router.post("/edit/:id", auth, editCustomer);

export default router;