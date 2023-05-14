import app from "./app";
import mongoose from "mongoose";

const port = 5000;

//database connection
async function bootstrap() {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost:27017"
    );
    console.log("Database is connected 🛢");
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
