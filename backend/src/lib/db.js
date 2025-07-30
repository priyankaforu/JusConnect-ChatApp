import mongoose from "mongoose";
import colors from "colors";
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `MONGODB Connected: ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (error) {
    console.log(`MONGODB Connection Error: ${error.message}`.red.bold);
    process.exit(1);
  }
};
