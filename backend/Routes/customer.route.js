import express from "express"
import { addCustomer, deleteCustomer, editCustomer, viewAllCustomer, viewCustomerById } from "../Controllers/customer/customer.min.js";

const router = express.Router();

router.post("/add", addCustomer);
router.delete("/delete/:id", deleteCustomer);
router.post("/view/:id", viewCustomerById);
router.post("/viewAll", viewAllCustomer)
router.post("/edit/:id", editCustomer);

export default router;