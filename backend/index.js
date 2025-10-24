import express from "express";
import { configDotenv } from "dotenv";
configDotenv();
const app = express();
import vehicleRoutes from "./Routes/vehicle.route.js";
import addressRoutes from "./Routes/address.route.js"
import driverRoutes from "./Routes/driver.route.js"
import { dbConfig } from "./config/dbConfig.js";
app.use(express.json());
app.use("/api/", vehicleRoutes);
app.use("/api/address", addressRoutes);
app.use("/api/driver", driverRoutes);
app.listen(process.env.PORT || 4000, async (req, res) => {
  dbConfig()
  console.log(`server is running at port ${process.env.PORT} `)
})

