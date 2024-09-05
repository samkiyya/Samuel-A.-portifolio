import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: process.env.DB_NAME,
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(
      "Some error occured while connecting to database:",
      err.message
    );
    process.exit(1);
  }
};
export default connectDB;
