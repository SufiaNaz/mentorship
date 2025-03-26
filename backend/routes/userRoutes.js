import express from "express";
import User from "../models/User.js";
import authMiddleware from "../middleware/authMiddleware.js"; // Middleware to verify token

const router = express.Router();

// Get logged-in user details
router.get("/me", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); // Exclude password
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Error fetching user details:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export const userRouter = router;
