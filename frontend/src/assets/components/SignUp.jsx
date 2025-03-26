import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "student", // Default role selection
  });

  const [isSignedUp, setIsSignedUp] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle signup submission
  const handleSignup = async (e) => {
    e.preventDefault();
    setError(null);
    console.log(formData)
    try {
      const response = await fetch("http://localhost:4001/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.msg || "Signup failed");
      }

      console.log("Signup successful", data);
      setIsSignedUp(true);

      // Redirect to Home page after 2 seconds
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      setError(err.message);
      console.error("Signup error:", err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-violet-100">
      <div className="bg-white rounded-lg shadow-lg p-8 flex">
        {/* Left Side */}
        <div className="hidden md:block w-1/2 bg-violet-600 text-white p-8 rounded-l-lg relative">
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-l-lg"></div>
          <h2 className="relative z-10 text-3xl font-bold">Join Us!</h2>
          <p className="relative z-10 mt-2">Create an account to get started</p>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-700">Sign Up</h2>
          <p className="text-gray-500">Create a new account</p>

          {isSignedUp ? (
            <p className="text-green-600 font-bold mt-4">
              ✅ Signup complete! Redirecting to Home...
            </p>
          ) : (
            <form className="mt-6" onSubmit={handleSignup}>
              <div className="mb-4">
                <label className="block text-gray-600">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="awesome@user.com"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="********"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600">Role</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="student">Student</option>
                  <option value="mentor">Mentor</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600"
              >
                Sign Up
              </button>

              {error && <p className="text-red-500 mt-4">{error}</p>}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
