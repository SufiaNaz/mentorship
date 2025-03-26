import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullName: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["student", "mentor"], required: true },
    bio: String,
    skills: {
      type: [String],
      default: function () {
        return this.role === "mentor"
          ? ["Python", "React.js", "Machine Learning", "Data Structures", "Cybersecurity"]
          : [];
      },
    },
    linkedin: String,
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
