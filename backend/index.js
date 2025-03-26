import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import { userRouter } from "./routes/userRoutes.js";

// import profileRoutes from "./routes/profileRoutes.js";
// import mentorshipRoutes from "./routes/mentorshipRoutes.js";
// import messageRoutes from "./routes/messageRoutes.js";
// import resourceRoutes from "./routes/resourceRoutes.js";
// import notificationRoutes from "./routes/notificationRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// // Use Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRouter);

// app.use("/api/profile", profileRoutes);
// app.use("/api/mentorship", mentorshipRoutes);
// app.use("/api/messages", messageRoutes);
// app.use("/api/resources", resourceRoutes);
// app.use("/api/notifications", notificationRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
