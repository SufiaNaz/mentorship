import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import { userRouter } from "./routes/userRoutes.js";



const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));


mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));


app.use("/api/auth", authRoutes);
app.use("/api/users", userRouter);



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
