import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("connect to dtb success!")
  } catch (error) {
    console.log(error);
    console.log("connect to dtb error!")
  }
}


