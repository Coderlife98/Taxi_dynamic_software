import mongoose from "mongoose";

export const dbConfig = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log("DB Connected Successfully ")
  } catch (error) {
    console.log("Error while connecting DB",error.message);
  }

}