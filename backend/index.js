import express from "express";
import { configDotenv } from "dotenv";
configDotenv();
import cors from "cors";
const app = express();
import vehicleRoutes from "./Routes/vehicle.route.js";
import addressRoutes from "./Routes/address.route.js"
import driverRoutes from "./Routes/driver.route.js"
import fairRoutes from "./Routes/fair.route.js"
import customerRoutes from "./Routes/customer.route.js"
import bookingRoute from "./Routes/booking.route.js"
import { dbConfig } from "./config/dbConfig.js";
app.use(cors());
app.use(express.json());
app.use("/api/", vehicleRoutes);
app.use("/api/address", addressRoutes);
app.use("/api/driver", driverRoutes);
app.use("/api/fair", fairRoutes);
app.use("/api/customer", customerRoutes);
app.use("/api/booking", bookingRoute)
app.listen(process.env.PORT || 4000, async (req, res) => {
  dbConfig()
  console.log(`server is running at port ${process.env.PORT} `)
})

