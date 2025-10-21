import express from "express";
import { configDotenv } from "dotenv";
configDotenv();
const app = express();
import vehicleRoutes from "./Routes/vehicle.route.js";
import { dbConfig } from "./config/dbConfig.js";
app.use(express.json());
app.use("/api/", vehicleRoutes);

app.listen(process.env.PORT || 4000, async (req, res) => {
  dbConfig()
  console.log(`server is running at port ${process.env.PORT} `)
})

